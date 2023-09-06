

// document.getElementById("textItalic").addEventListener('click', function (event) {
//     // const textareafield = document.getElementById("textareafield");
//     textareafield.style.fontStyle = "italic";
//     event.target.style.backgroundColor = "purple";
//     event.target.style.color = "white";
// });

function getStyle(btnId, styleClass) {
    const textareafield = document.getElementById('textareafield');
    document.getElementById(btnId).addEventListener('click', function (event) {
        textareafield.classList.toggle(styleClass);
        event.target.classList.toggle("bg-violet-800");
        event.target.classList.toggle("text-white");

    });
}
// Font Bold 
getStyle('fontBold', 'font-bold');
// Font Italic 
getStyle('textItalic', 'italic');
// Text Decoration Underlin e
getStyle('textUnderline', 'underline');
// Text align Left 
getStyle('textLeft', 'text-left');
// Text align Center 
getStyle('textCenter', 'text-center');
// Text align right 
getStyle('textRight', 'text-right');
// Text align justify 
getStyle('textJustify', 'text-justify');
// Text Transform Uppercase 
getStyle('textTransform', 'uppercase');


function getFontSize(inputId) {
    // Get the input element by its ID.
    let inputElement = document.getElementById(inputId);
    let textarea = document.getElementById("textareafield");
    textarea.style.fontSize = inputElement.value + "px";
    inputElement.addEventListener("change", function (event) {
        let value = event.target.value + "px";
        textarea.style.fontSize = value;
    });
}

function getColorCode(inputId) {
    // Get the input element by its ID.
    let inputElement = document.getElementById(inputId);
    let textarea = document.getElementById("textareafield");

    inputElement.addEventListener("change", function (event) {
        let value = event.target.value;
        textarea.style.color = value;
    });
}

getFontSize("fontSize");
getColorCode("colorCode");

