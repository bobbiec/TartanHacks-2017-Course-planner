var Visualization = {
  data: {

  },

  init: function() {
    var svg = d3.select('svg');
    svg.append("text")
        .attr("x", 50)
        .attr("y", 50)
        .text(function(d) {return "loading boby chan's schedule"});
  },

  make_visualization: function(graph){
    var self = Visualization;


    var svg = d3.select("svg"),
        width = +svg.attr("width"),
        height = +svg.attr("height");
    svg.select('text').remove();

    var color = d3.scaleOrdinal(d3.schemeCategory20);

    var simulation = d3.forceSimulation()
        .force("link", d3.forceLink().id(function(d) { return d.id; }).distance(150))
        .force("charge", d3.forceManyBody(1))
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("collide", d3.forceCollide(25));

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
            .on("end", dragended));

    node.append("circle")
        .attr("r", 25)
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
        .attr("dx", -22)
        .attr("dy", ".35em")
        .text(function(d) {return d.id});

    node.append("title")
        .text(function(d) {
          if (d.fills) {
            return "Fills: " + d.fills;
          }
          return "Does not fulfill any addition requirements.";
        });

    simulation
        .nodes(graph.nodes)
        .on("tick", ticked);

    simulation.force("link")
        .links(graph.links);

    function ticked() {
      link
          .attr("x1", function(d) { return d.source.x; })
          .attr("y1", function(d) { return d.source.y; })
          .attr("x2", function(d) { return d.target.x; })
          .attr("y2", function(d) { return d.target.y; });

      node
          .attr("transform", function(d) {return "translate(" + d.x + "," + d.y + ")"; });
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
      if (!d3.event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  }
};