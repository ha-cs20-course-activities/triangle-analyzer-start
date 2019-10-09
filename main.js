// TRIANGLE ANALYZER ASSIGNMENT SOLUTION

// Add Event Listener
document.getElementById('analyze-btn').addEventListener('click', analyzeTriangle);

// Event Function
function analyzeTriangle() {
    // Input Values
    let angleA = Number(document.getElementById('angleA').value);
    let angleB = Number(document.getElementById('angleB').value);
    let angleC = Number(document.getElementById('angleC').value);

    // HTML Output Elements
    let validEl = document.getElementById('valid-output');
    let typeEl = document.getElementById('type-output');

    // Determine and Output Triangle Type
    if (isValidTriangle(angleA, angleB, angleC)) {
        validEl.innerHTML = "Yes";
        typeEl.innerHTML = triangleType(angleA, angleB, angleC);
    } else {
        validEl.innerHTML = "No";
        typeEl.innerHTML = "----"
    }
    
}

// YOUR FUNCTIONS
