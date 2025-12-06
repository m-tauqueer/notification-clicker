     const notifyBtn = document.getElementById('btn-notify');
        const statusMsg = document.getElementById('status-msg');

        if (!("Notification" in window)) {
            alert("This browser does not support desktop notifications");
        }

        function askPermission() {
            Notification.requestPermission().then(permission => {
                updateStatus(permission);
            });
        }

        function sendNotification() {
            if (Notification.permission === "granted") {
                const notif = new Notification("👋 Hello there!", {
                    body: "You just built a Notification Clicker!",
                    icon: "https://cdn-icons-png.flaticon.com/512/3239/3239952.png" 
                });

                setTimeout(() => notif.close(), 4000);
            } else {
                alert("Please enable notifications first!");
            }
        }

        function updateStatus(permission) {
            if (permission === "granted") {
                statusMsg.textContent = "Status: Permission Granted ✅";
                notifyBtn.classList.add("active");
                notifyBtn.removeAttribute("disabled");
            } else if (permission === "denied") {
                statusMsg.textContent = "Status: Permission Denied ❌";
            }
        }

        updateStatus(Notification.permission);