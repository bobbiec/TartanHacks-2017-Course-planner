var Visualization = {
  data: {

  },

  init: function() {
    var svg = d3.select('svg');
  },

  make_visualization: function(graph){
    var self = Visualization;
    self.data.graph = graph;

    var graph = self.data.graph;
    var selected = null;
    var alpha_target = 0.05;

    var linkedByIndex = {};
    _.map(graph.links, function(d) {
      linkedByIndex[d.source + "," + d.target] = true;
    });

    function isConnected(a, b) {
      return linkedByIndex[a + "," + b] || linkedByIndex[b + "," + a] || a == b;
    }

    var radius = 18;

    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(function(d) {
          var ratio = Math.sqrt(d.source.links)/ Math.sqrt(9);
          return Math.max(40, ratio * 60);
        }).strength(function(d) {
          return 1 / Math.min(d.source.links, 5 * d.target.links);
        }))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide(radius))
        .force('charge', d3.forceManyBody().strength(function(d){
          if(d.taken) {
            return -50;
          }
          return -16;
        }).distanceMax(500));
    simulation.alphaDecay(0.01)
              .velocityDecay(0.5)
              .alphaTarget(alpha_target);

    setTimeout(function(){
        alpha_target = 0;
        simulation.alphaTarget(alpha_target);
    }, 10000);

    var link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(graph.links)
        .enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); });

    var node = svg.selectAll(".node")
        .data(graph.nodes)
        .enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("click", mouseclick);

    var circle = node.append("circle")
        .attr("r", radius)
        .attr("fill", function(d) {
          if (d.fills != null) {
            return d3.rgb(90, 152, 252);
          }
          if (d.taken) {
            return d3.rgb(138, 206, 11);
          }
         return d3.rgb(180, 180, 180);
        });

    node.append("text")
        .attr("dx", -15)
        .attr("dy", ".35em")
        .attr('font-size', "9px")
        .text(function(d) {return d.id});

    node.append("title")
        .text(function(d) {
          if (d.fills) {
            return "Fills: " + d.fills;
          }
          else if (!d.taken) {
            return "Does not fulfill any additional requirements.";
          }
        });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function node_in(nodes, node) {
      var found = false;
      _.forEach(nodes, function(comp) {
        if (comp.id == node.id) {
          console.log('here');
          found = true;
        }
      });
      return found;
    }

    function link_in(links, link) {
      var found = false;
      _.forEach(links, function(comp) {
        if (comp.source == link.source && comp.target == link.target) {
          found = true;
        }
      });
      return found;
    }

    function restart(graph) {
      _.forEach(graph.nodes, function(node) {
        if (!node_in(self.data.graph.nodes, node)) {
          self.data.graph.nodes.push(node);
        }
      });

      _.forEach(graph.links, function(link) {
        if (!link_in(self.data.graph.links, link)) {
          self.data.graph.links.push(link);
        }
      });

      var graph = self.data.graph;

      node = node.data(graph.nodes);
      node.exit().remove();
      node = node.enter().append("g")
        .attr("class", "node")
        .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
        .on("mouseover", mouseover)
        .on("mouseout", mouseout)
        .on("click", mouseclick).merge(node);

      node.append("circle")
        .attr("r", radius)
        .attr("fill", function(d) {
          if (d.fills != null) {
            return d3.rgb(90, 152, 252);
          }
          if (d.taken) {
            return d3.rgb(138, 206, 11);
          }
         return d3.rgb(180, 180, 180);
        });
      node.append("text")
        .attr("dx", -15)
        .attr("dy", ".35em")
        .attr('font-size', "9px")
        .text(function(d) {return d.id});
      // Apply the general update pattern to the links.
      link = link.data(graph.links);
      link.exit().remove();
      link = link.enter().append("line")
        .attr("stroke-width", function(d) { return Math.sqrt(d.value); })
        .merge(link);

      // Update and restart the simulation.
      simulation
          .nodes(graph.nodes)
          .on("tick", ticked);

      simulation.force("link")
          .links(graph.links);
      simulation.alpha(1).restart();
    }

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) {
            d.x = Math.min(width - radius, Math.max(radius, d.x));
            d.y = Math.min(height - radius, Math.max(radius, d.y));
            return "translate(" + d.x + "," + d.y
            + ")"; });
    }

    function dragstarted(d) {
      if (!d3.event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(d) {
      d.fx = d3.event.x;
      d.fy = d3.event.y;
    }

    function dragended(d) {
      if (!d3.event.active) simulation.alphaTarget(alpha_target);
      d.fx = null;
      d.fy = null;
    }

    function mouseover(d, i) {
      // this whole selected stuff is kind of broken right now
      if (selected != null && d.id != selected.id) {
        selected = null;
      }

      circle.style("stroke", function(o) {
        return isConnected(d.id, o.id) ? "black" : "white";
      });
      link.style("stroke-opacity", function(o) {
        return o.source.index == d.index || o.target.index == d.index ? 1.0 : 0.6;
      });
      link.style("stroke", function(o) {
        return o.source.index == d.index || o.target.index == d.index ? "blue" : d3.rgb(153, 153, 153);
      });
    }

    function mouseout(d, i) {
      circle.style("stroke", function(o) {
        return "white";
      });
      link.style("stroke-opacity", function(o) {
        return 0.6;
      });
      link.style("stroke", function(o) {
        return d3.rgb(153, 153, 153);
      });
    }

    function mouseclick(d, i) {
      Graph.update_sidebar(d.id, handle_new_course);
      selected = d;
    }

    function handle_new_course(graph) {
      restart(graph);
    }
  }
};