document.getElementById("contactForm").addEventListener("submit", async function(event) {
   event.preventDefault();

   const name = document.getElementById("name").value;
   const email = document.getElementById("email").value;
   const message = document.getElementById("message").value;

   const responseMessage = document.getElementById("responseMessage");

   try {
       const response = await fetch("http://127.0.0.1:5000/send-message", {
           method: "POST",
           headers: {
               "Content-Type": "application/json"
           },
           body: JSON.stringify({ name, email, message })
       });

       const result = await response.json();
       
       if (response.ok) {
           responseMessage.textContent = "✅ Message sent successfully!";
           responseMessage.style.color = "green";
           document.getElementById("contactForm").reset(); // Clear form
       } else {
           responseMessage.textContent = "❌ Error sending message!";
           responseMessage.style.color = "red";
       }
   } catch (error) {
       responseMessage.textContent = "❌ Server error, try again later.";
       responseMessage.style.color = "red";
   }
});
