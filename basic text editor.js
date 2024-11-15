function run() {
    var code = document.getElementById("code").value;
    var result_box = document.getElementById("result");
    result_box.innerHTML = code;  // Corrected from result_tbox to result_box

    var code_box = document.getElementById("code_box");
    code_box.style.display = "none";  // Corrected spacing and quotes issues

    var result_box = document.getElementById("result_box");  // Fixed extra space before 'result_box'
    result_box.style.display = "block";
    result_box.setAttribute("class","animate__animated animate__slideInRight");
    var btn = document.getElementById("run_btn");
    btn.style.display ="none";
    var b_btn = document.getElementById("icon");
    b_btn.style.display = "block";
}
function back() {
    var result_box = document.getElementById("result_box");
    result_box.style.display = "none";  // Hide the result box

    var code_box = document.getElementById("code_box");
    code_box.style.display = "block";  // Show the code box
    code_box.setAttribute("class","animate__animated animate__slideInLeft"); 

    var b_btn = document.getElementById("icon");
    b_btn.style.display = "block";  // Show the button (assuming you want to reveal it again)
}