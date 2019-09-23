    function formatTime(time){
        let minutes = Math.floor(time / 1) % 60;
        let hours = Math.floor(time / 60) % 24;
        let days = Math.floor(time / 1440);
        return `${days} day(s) ${hours} hour(s) ${minutes} minute(s)`;
    }
    formatTime(129);