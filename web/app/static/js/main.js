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
    var taken_map = {};
    var future_map = {};
    _.map(courses_taken, function(course) {
      taken_map[course] = true;
    });

    var course_list = this.data.course_info['courses'];
    courses_taken = _.filter(courses_taken, function(course) {
      return (course in course_list);
    });
    console.log(courses_taken);
    var future_courses = _.flatMap(courses_taken, function(course) {
      var has_prereq = course_list[course]['prereq-for'];
      var result = _.filter(has_prereq, function(req_course) {
        var pre = course_list[req_course]['prereqs_obj'];
        if (pre['invert'] == null) {
          return false;
        }
        if (pre['invert']) {
          var reqs = pre['reqs_list'];
          var has_all_reqs = true;
          for (var i = 0; i < reqs.length; i++) {
            var has_any = false;
            for (var j = 0; j < reqs[i].length; j++) {
              if (taken_map[reqs[i][j]]) {
                has_any = true;
              }
            }
            if (!has_any) {
              has_all_reqs = false;
            }
          }
          return has_all_reqs;
        }
        return true;
      });
      return result;
    });

    future_courses = _.difference(_.uniq(future_courses), courses_taken);
    _.map(future_courses, function(course) {
      future_map[course] = true;
    });

    var graph = {
      'nodes': [],
      'links': []
    };
    graph['nodes'] = _.map(_.concat(courses_taken, future_courses), function(course) {
      return {
        "id": course,
        "taken": taken_map[course]
      };
    });

    _.map(graph['nodes'], function(course) {
      if (course['taken']) {
        _.map(course_list[course['id']]['prereq-for'], function(req) {
          if (!future_map[req]) {
            return;
          }
          graph['links'].push({
            "source": course["id"],
            "target": req,
            "value": 1
          });
          console.log('here');
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
    this.process_user_courses(["76-101", "21-120", "33-111", "99-101", "73-100", "21-122", "33-112", "09-105", "15-112", "82-231", "76-012", "79-211", "15-122", "15-150", "15-210", "15-213", "15-251"], {});
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