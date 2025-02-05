// bangla time showing
const bdtime = document.querySelector(".time span");

function formatTimeInBengali() {
    const date = new Date();
    const options = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    };
    const timeInBengali = new Intl.DateTimeFormat('bn-BD', options).format(date);
    bdtime.innerHTML = timeInBengali;
};setInterval(formatTimeInBengali, 1000);

