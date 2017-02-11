console.log('test')
var test_reqs = [{"Writing and Expression": ["15-296", "16-397", "76-369", "48-240", "48-241", "48-371", "51-271", "54-245", "57-173", "57-209", "57-283", "57-284", "57-306", "57-477", "57-480", "60-203", "60-205", "89-196", "60-206", "60-355", "62-371", "39-193", "66-221", "70-342", "76-212", "76-221", "76-232", "76-238", "76-241", "76-245", "76-247", "76-252", "76-332", "76-333", "76-335", "79-336", "76-337", "76-341", "76-347", "76-349", "76-352", "76-344", "76-353", "76-354", "76-360", "76-369", "76-374", "76-378", "76-386", "76-387", "76-419", "76-425", "76-432", "76-435", "79-201", "79-202", "00-175", "79-203", "79-205", "79-208", "00-170", "79-213", "79-215", "45-197", "79-217", "79-220", "79-221", "79-223", "79-226", "79-228", "79-229", "80-194", "79-230", "79-233", "79-235", "79-238", "79-240", "79-242", "79-249", "79-252", "79-255", "79-257", "79-260", "79-261", "00-190", "79-262", "79-265", "79-266", "79-267", "79-268", "79-269", "79-275", "79-276", "79-278", "79-280", "79-281", "79-282", "79-283", "79-286", "79-287", "79-288", "79-291", "79-295", "79-300", "79-299", "50-195", "79-301", "79-305", "79-307", "79-309", "49-200", "79-310", "79-311", "79-312", "79-314", "79-315", "79-317", "79-319", "79-320", "79-321", "79-322", "79-323", "00-180", "79-325", "79-329", "79-330", "79-331", "79-333", "79-337", "79-339", "79-340", "79-341", "79-343", "79-345", "79-349", "79-352", "50-165", "79-353", "79-354", "79-355", "79-359", "79-363", "79-364", "79-368", "79-371", "79-372", "79-373", "79-374", "79-377", "79-380", "79-383", "79-384", "79-385", "79-388", "79-396", "80-255", "80-261", "80-276", "80-348", "82-137", "82-200", "82-201", "82-202", "82-206", "82-215", "82-221", "82-222", "82-226", "82-231", "82-232", "82-234", "82-235", "82-236", "82-241", "82-246", "82-242", "82-252", "82-261", "82-262", "82-271", "82-272", "82-273", "82-276", "82-278", "82-293", "82-299", "82-300", "82-303", "82-304", "82-305", "82-306", "82-311", "82-312", "82-320", "82-323", "82-326", "82-327", "82-331", "82-332", "82-333", "82-335", "82-336", "82-339", "82-340", "82-341", "82-342", "82-343", "82-344", "82-345", "82-346", "82-361", "82-362", "82-376", "82-406", "82-415", "82-416", "82-425", "82-431", "82-433", "82-434", "82-440", "82-441", "82-445", "82-450", "82-451", "82-455", "82-456", "82-473", "82-474", "82-499", "82-501", "82-502", "84-320", "84-322", "84-326", "84-362", "84-380", "84-386", "84-388", "84-389", "85-221", "85-241", "85-251", "85-375", "85-443", "85-444", "85-446", "85-501", "88-238", "88-260", "88-281", "88-284", "88-320", "88-326", "88-357", "88-359", "88-362", "88-370", "88-380", "88-384", "88-387", "88-389", "88-408", "99-343"]}, {"Fund. of M.E.": ["24-101"]}, {"Intro. Engineering Elective": ["06-100", "12-100", "18-100", "27-100", "19-101", "42-101"]}, {"Innovation and International": ["15-296", "16-397", "76-369", "48-240", "48-241", "48-371", "51-271", "54-245", "57-173", "57-209", "57-283", "57-284", "57-306", "57-477", "57-480", "60-203", "60-205", "89-196", "60-206", "60-355", "62-371", "39-193", "66-221", "70-342", "76-212", "76-221", "76-232", "76-238", "76-241", "76-245", "76-247", "76-252", "76-332", "76-333", "76-335", "79-336", "76-337", "76-341", "76-347", "76-349", "76-352", "76-344", "76-353", "76-354", "76-360", "76-369", "76-374", "76-378", "76-386", "76-387", "76-419", "76-425", "76-432", "76-435", "79-201", "79-202", "00-175", "79-203", "79-205", "79-208", "00-170", "79-213", "79-215", "45-197", "79-217", "79-220", "79-221", "79-223", "79-226", "79-228", "79-229", "80-194", "79-230", "79-233", "79-235", "79-238", "79-240", "79-242", "79-249", "79-252", "79-255", "79-257", "79-260", "79-261", "00-190", "79-262", "79-265", "79-266", "79-267", "79-268", "79-269", "79-275", "79-276", "79-278", "79-280", "79-281", "79-282", "79-283", "79-286", "79-287", "79-288", "79-291", "79-295", "79-300", "79-299", "50-195", "79-301", "79-305", "79-307", "79-309", "49-200", "79-310", "79-311", "79-312", "79-314", "79-315", "79-317", "79-319", "79-320", "79-321", "79-322", "79-323", "00-180", "79-325", "79-329", "79-330", "79-331", "79-333", "79-337", "79-339", "79-340", "79-341", "79-343", "79-345", "79-349", "79-352", "50-165", "79-353", "79-354", "79-355", "79-359", "79-363", "79-364", "79-368", "79-371", "79-372", "79-373", "79-374", "79-377", "79-380", "79-383", "79-384", "79-385", "79-388", "79-396", "80-255", "80-261", "80-276", "80-348", "82-137", "82-200", "82-201", "82-202", "82-206", "82-215", "82-221", "82-222", "82-226", "82-231", "82-232", "82-234", "82-235", "82-236", "82-241", "82-246", "82-242", "82-252", "82-261", "82-262", "82-271", "82-272", "82-273", "82-276", "82-278", "82-293", "82-299", "82-300", "82-303", "82-304", "82-305", "82-306", "82-311", "82-312", "82-320", "82-323", "82-326", "82-327", "82-331", "82-332", "82-333", "82-335", "82-336", "82-339", "82-340", "82-341", "82-342", "82-343", "82-344", "82-345", "82-346", "82-361", "82-362", "82-376", "82-406", "82-415", "82-416", "82-425", "82-431", "82-433", "82-434", "82-440", "82-441", "82-445", "82-450", "82-451", "82-455", "82-456", "82-473", "82-474", "82-499", "82-501", "82-502", "84-320", "84-322", "84-326", "84-362", "84-380", "84-386", "84-388", "84-389", "85-221", "85-241", "85-251", "85-375", "85-443", "85-444", "85-446", "85-501", "88-238", "88-260", "88-281", "88-284", "88-320", "88-326", "88-357", "88-359", "88-362", "88-370", "88-380", "88-384", "88-387", "88-389", "88-408", "99-343"]},
 {"Chemistry Lab": ["09-101", "03-124", "33-100", "33-104", "42-203"]}, {"Calculus in 3D": ["21-259"]}, {"Thermodynamics I": ["24-221"]}, {"Statics": ["24-261"]}, {"Differential Equations": ["21-260"]}, {"Fluid Mechanics": ["24-231"]}, {"Stress Analysis": ["24-262"]}, {"Machine Shop Pract": ["24-200"]}, {"Intro to CAD": ["24-202"]}, {"Seminar I": ["24-302"]}, {"Design I": ["24-370"]}, {"Heat Transfer": ["24-322"]}, {"Dynamics": ["24-351"]}, {"Eng Stats and Qual. Control": ["36-220"]}, {"Numerical Methods": ["24-321"]}, {"Thermal - Fluids Exp.": ["24-321"]}, {"Dyn. Systems & Control": ["24-352"]}, {"Design II": ["24-441"]}, {"Mechanical Systems Exp.": ["24-452"]}, {"MechE Technical Elective": ["24-341", "24-650", "24-651", "24-674", "24-681", "24-683", "24-688", "24-354", "24-355", "24-451", "24-655", "24-657", "24-421", "24-424", "24-425", "24-615", "24-623", "24-642"]}, {"Soc Analysis and Dec Making": ["15-296", "16-397", "76-369", "48-240", "48-241", "48-371", "51-271", "54-245", "57-173", "57-209", "57-283", "57-284", "57-306", "57-477", "57-480", "60-203", "60-205", "89-196", "60-206", "60-355", "62-371", "39-193", "66-221", "70-342", "76-212", "76-221", "76-232", "76-238", "76-241", "76-245", "76-247", "76-252", "76-332", "76-333", "76-335", "79-336", "76-337", "76-341", "76-347", "76-349", "76-352", "76-344", "76-353", "76-354", "76-360", "76-369", "76-374", "76-378", "76-386", "76-387", "76-419", "76-425", "76-432", "76-435", "79-201", "79-202", "00-175", "79-203", "79-205", "79-208", "00-170", "79-213", "79-215", "45-197", "79-217", "79-220", "79-221", "79-223", "79-226", "79-228", "79-229", "80-194", "79-230", "79-233", "79-235", "79-238", "79-240", "79-242", "79-249", "79-252", "79-255", "79-257", "79-260", "79-261", "00-190", "79-262", "79-265", "79-266", "79-267", "79-268", "79-269", "79-275", "79-276", "79-278", "79-280", "79-281", "79-282", "79-283", "79-286", "79-287", "79-288", "79-291", "79-295", "79-300", "79-299", "50-195", "79-301", "79-305", "79-307", "79-309", "49-200", "79-310", "79-311", "79-312", "79-314", "79-315", "79-317", "79-319", "79-320", "79-321", "79-322", "79-323", "00-180", "79-325", "79-329", "79-330", "79-331", "79-333", "79-337", "79-339", "79-340", "79-341", "79-343", "79-345", "79-349", "79-352", "50-165", "79-353", "79-354", "79-355", "79-359", "79-363", "79-364", "79-368", "79-371", "79-372", "79-373", "79-374", "79-377", "79-380", "79-383", "79-384", "79-385", "79-388", "79-396", "80-255", "80-261", "80-276", "80-348", "82-137", "82-200", "82-201", "82-202", "82-206", "82-215", "82-221", "82-222", "82-226", "82-231", "82-232", "82-234", "82-235", "82-236", "82-241", "82-246", "82-242", "82-252", "82-261", "82-262", "82-271", "82-272", "82-273", "82-276", "82-278", "82-293", "82-299", "82-300", "82-303", "82-304", "82-305", "82-306", "82-311", "82-312", "82-320", "82-323", "82-326", "82-327", "82-331", "82-332", "82-333", "82-335", "82-336", "82-339", "82-340", "82-341", "82-342", "82-343", "82-344", "82-345", "82-346", "82-361", "82-362", "82-376", "82-406", "82-415", "82-416", "82-425", "82-431", "82-433", "82-434", "82-440", "82-441", "82-445", "82-450", "82-451", "82-455", "82-456", "82-473", "82-474", "82-499", "82-501", "82-502", "84-320", "84-322", "84-326", "84-362", "84-380", "84-386", "84-388", "84-389", "85-221", "85-241", "85-251", "85-375", "85-443", "85-444", "85-446", "85-501", "88-238", "88-260", "88-281", "88-284", "88-320", "88-326", "88-357", "88-359", "88-362", "88-370", "88-380", "88-384", "88-387", "88-389", "88-408", "99-343"]}, {"Experiential Learning I": ["39-210"]}, {"Experiential Learning II": ["39-220"]}, {"Experiential Learning III": ["39-310"]}];

var cs_minor_reqs = ["15-112", "21-127", "15-122",
                     "15-150",
                     "15-210",
                     "15-213",
                     "15-251",
                     "CS Elective"];


var show_minor = false;

var Graph = {
  data: {
  },

  init: function() {
    this.load_data();
  },

  load_data: function() {
    var self = this;

    self.data.course_info = db;
    self.process_data();
    if (self.callback) {
      self.callback();
      self.callback = null;
    }
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

  make_graph_for_user: function(courses_taken, unfilled, update_only) {
    var taken_map = {};
    var future_map = {};
    _.map(courses_taken, function(course) {
      taken_map[course] = true;
    });

    var course_list = this.data.course_info['courses'];
    courses_taken = _.filter(courses_taken, function(course) {
      return (course in course_list);
    });

    var future_courses = _.flatMap(courses_taken, function(course) {
      var has_prereq = course_list[course]['prereq-for'];
      var result = _.filter(has_prereq, function(req_course) {
        if (course == '76-101') {
          return false;
        }
        var pre = course_list[req_course]['prereqs_obj'];
        if (pre['invert'] == null) {
          return false;
        }
        if (!pre['invert']) {
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
        } else {
          var reqs = pre['reqs_list'];
          var has_any_reqs = false;
          for (var i = 0; i < reqs.length; i++) {
            var has_all = true;
            for (var j = 0; j < reqs[i].length; j++) {
              if (!taken_map[reqs[i][j]]) {
                has_all = false;
              }
            }
            if (has_all) {
              has_any_reqs = true;
            }
          }
          return has_any_reqs;
        }
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

    var course_data_map = {};
    graph['nodes'] = _.map(_.concat(courses_taken, future_courses), function(course) {
      var course_data = {
        "id": course,
        "taken": taken_map[course],
        "fills": taken_map[course] ? null : unfilled[course],
        "links": 0
      };
      course_data_map[course] = course_data;
      return course_data;
    });

    _.map(graph['nodes'], function(course) {
      if (course['taken']) {
        _.map(course_list[course['id']]['prereq-for'], function(req) {
          if (!future_map[req]) {
            return;
          }
          course_data_map[course['id']].links += 1;
          course_data_map[req].links += 1;
          graph['links'].push({
            "source": course["id"],
            "target": req,
            "value": 1
          });
        });
      }
    });
    if (!update_only) {
      Visualization.make_visualization(graph);
    }
    return graph;
  },

  update_sidebar: function(course_number, add_course_callback) {
    var self = Graph;
    var course_list = self.data.course_info['courses'];

    var desc = course_list[course_number];
    console.log(desc);

    var sidebar = $('.sidebar-content');
    sidebar.empty();

    if (!_.includes(User.data.courses_taken, course_number)) {
      var add_course = $('<input type="submit" value="Add Course" class="btn btn-info btn-block" id="add-course">');
      sidebar.append(add_course);
      add_course.click(function() {
        User.data.courses_taken.push(course_number);
        var graph = self.make_graph_for_user(User.data.courses_taken, User.data.unfilled, true);
        add_course_callback(graph);
      });
    }

    var name = $('<h3></h3>').text(desc['name']);
    sidebar.append(name);

    var units = $('<p></p>').text('Units: ' + desc['units']);
    sidebar.append(units);

    var info = $('<p></p>').text(desc['desc']);
    sidebar.append(info);

    var pre = $('<p></p>').text('Prerequisites: ' + (desc['prereqs'] ? desc['prereqs'] : 'None'));
    sidebar.append(pre);

    var co = $('<p></p>').text('Corequisites: ' + (desc['coreqs'] ? desc['coreqs'] : 'None'));
    sidebar.append(co);
  }
};

var User = {
  data: {

  },

  init: function() {
    this.data.name = 'Boby Chan';
    this.process_user_courses(["21-120", "33-111", "99-101", "73-100", "21-122", "33-112", "09-105", "15-112", "82-231", "76-012", "79-211", "15-122", "15-150", "15-210", "15-213", "15-251"], test_reqs);
  },

  update: function() {
    if (auditObject) {
      show_minor = true; // Faking CS minor detection
      this.process_user_courses(auditObject.finished, auditObject.unfinished);
    }
  },

  process_user_courses: function(courses_taken, unfilled) {
    var self = User;

    if (courses_taken && unfilled) {
      self.data.courses_taken = courses_taken;
      self.data.unfilled = {};

      self.check_minor(courses_taken);

      _.map(unfilled, function(category) {
        var cat_name = Object.keys(category)[0];
        var fill_courses = category[cat_name];
        _.map(fill_courses, function(course) {
          self.data.unfilled[course] = cat_name;
        });
      });
    }

    course_data = Graph.data.course_info;
    if (!course_data) {
      Graph.callback = self.process_user_courses;
      return;
    }

    var data = self.data;
    Graph.make_graph_for_user(data.courses_taken, data.unfilled);
  },

  check_minor: function(courses_taken) {
    if (show_minor) {  $('.minor').css("display", "block"); }
  }
};

var Suggest = {
  init: function() {
    $('#suggest').click(function () {
      var first = $('#firstCourse').val();
      var second = $('#secondCourse').val();
      var third = $('#thirdCourse').val();
      $.ajax({
        type: 'POST',
        url: '/suggest',
        dataType: 'json',
        data: JSON.stringify({'info': [first, second, third]}, null, '\t'),
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          $('#suggest_output').text(result);
        }
      })
    });
  }
};

(function() {
  User.init();
  User.update();
  Graph.init();
  Visualization.init();
  Suggest.init();
})();