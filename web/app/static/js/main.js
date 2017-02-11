console.log('test')

var Graph = {
  data: {
  },

  init: function() {
    this.load_data();
  },

  load_data: function() {
    var self = this;

    var url = 'https://s3-us-west-2.amazonaws.com/tartanhacks/data.jsonp';
    $.ajax({
      url: url,
      type: 'GET',
      dataType: 'jsonp',
      jsonpCallback: 'callback',
      success: function(course_info) {
        self.data.course_info = course_info;
        self.process_data();
        if (self.callback) { // Hacky solution since data takes so long to load
          self.callback();
          self.callback = null;
        }
      }
    })
  },

  process_data: function() {
    var course_info = this.data.course_info;
    var course_list = course_info['courses'];
    course_list = _.mapValues(course_list, function(o) {
      o['prereq-for'] = [];
      return o;
    });

    _.forEach(course_list, function(course, course_num) {
      var pre = course['prereqs_obj'];
      var co = course['coreqs_obj'];
      var flat_pre = _.concat([], _.flatten(pre['reqs_list']), _.flatten(co['reqs_list']));

      pre = _.uniq(flat_pre);
      _.forEach(pre, function(pre_num) {
        if (pre_num in course_list) {
          course_list[pre_num]['prereq-for'].push(course_num);
        }
      });
    });
  },

  make_graph_for_user: function(courses_taken) {
    var course_list = this.data.course_info['courses'];
    var future_courses = _.flatMap(courses_taken, function(course) {
      if (!(course in course_list)) {
        return [];
      }
      return course_list[course]['prereq-for'];
    });
    future_courses = _.difference(_.uniq(future_courses), courses_taken);
    var graph = {
      'nodes': [],
      'links': []
    };
    var taken_map = {};
    _.map(courses_taken, function(course) {
      taken_map[course] = true;
    });
    graph['nodes'] = _.map(_.concat(courses_taken, future_courses), function(course) {
      return {
        "id": course,
        "taken": taken_map[course]
      };
    });

    _.map(graph['nodes'], function(course) {
      if (course['taken']) {
        _.map(course_list[course['id']]['prereq-for'], function(req) {
          graph['links'].push({
            "source": course["id"],
            "target": req,
            "value": 1
          });
        });
      }
    });
  Visualization.make_visualization(graph);
  }
};

var User = {
  data: {

  },

  init: function() {
    this.data.name = 'Boby Chan';
    this.process_user_courses(['15-451', '15-251'], {});
  },

  process_user_courses: function(courses_taken, unfilled) {
    var self = User;

    if (courses_taken && unfilled) {
      self.data.courses_taken = courses_taken;
      self.data.unfilled = unfilled;
    }

    course_data = Graph.data.course_info;
    if (!course_data) {
      Graph.callback = self.process_user_courses;
      return;
    }

    var data = self.data;
    Graph.make_graph_for_user(data.courses_taken);
  }

};

(function() {
  User.init();
  Graph.init();
  Visualization.init();
})();