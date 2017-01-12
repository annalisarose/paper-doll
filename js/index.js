$(function() {

    $(dragit);
    function dragit(){
    $("#skirt").draggable({
    snap: "#doll",
    snapTolerance: 10
    });
  };
});