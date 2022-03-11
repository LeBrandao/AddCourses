function addCourse() {
  var addCourse = document.getElementById("addCourse").value;

  if (addCourse.endsWith(".png")) {
    listCourses(addCourse);
  }else {
    console.error("Endereço inválido")
  }

  document.getElementById("addCourse").value = "";
}

function listCourses(addCourse) {
  var elementCourse = "<img src=" + addCourse + ">";
    var elementCourseA =
      "<a href= 'https://www.google.com' target='_blank'>" +
      elementCourse +
      "</a>";
    var listCourse = document.getElementById("listCourse");
    listCourse.innerHTML = listCourse.innerHTML + elementCourseA;
    console.log(addCourse);
}
