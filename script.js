const messages = {
    "default": [
        "Happy Valentine's Day! You are amazing! ❤️",
        "Wishing you lots of love and happiness today! 💖",
        "You're a wonderful friend! Have a love-filled day! 🌹",
        "Roses are red, violets are blue, I'm lucky to have a friend like you! 🌸",
        "Love and friendship make the world go round! Happy Valentine's! 💕"
    ],
    "tony": "Tony, you are an incredible person! I appreciate you so much. You deserve all the love in the world! 💖",
    "tomi": "Tomi, you are one of a kind! Your kindness and love make the world brighter. Have a fantastic Valentine's! ❤️",
    "ayomide": "Ayomide, why are you single na bby? 😘",
    "toluwalope": "Toluwalope, you are special! Wishing you joy and happiness today! 🌹",
    "abraham": "Abraham, you're amazing! Stay blessed and keep shining! ✨",
    "albert": "Albert, you're an awesome friend! Hope your Valentine's Day is filled with love and happiness! 💕",
    "tolu": "Tolu, may your day be filled with laughter, love, and joy! ❤️"
};

document.addEventListener("DOMContentLoaded", () => {
    let userName = prompt("What's your name?");
    if (!userName) {
        userName = "Friend";
    }

    const greeting = document.createElement("h2");
    greeting.textContent = `Hello, ${userName}! 💖`;
    greeting.style.fontSize = "28px";
    greeting.style.marginBottom = "20px";
    greeting.style.textShadow = "1px 1px 3px rgba(0, 0, 0, 0.2)";
    
    function showMessage() {
        let valentineMessage = messages[userName.toLowerCase()] || `${userName}, ${messages["default"][Math.floor(Math.random() * messages["default"].length)]}`;
        document.getElementById("message").textContent = valentineMessage;
    }

    document.body.style.background = "linear-gradient(to right, #ff758c, #ff7eb3)";
    document.body.style.fontFamily = "'Arial', sans-serif";
    document.body.style.textAlign = "center";
    document.body.style.color = "white";
    
    const container = document.createElement("div");
    container.style.padding = "50px";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    
    const title = document.createElement("h1");
    title.textContent = "💖 Happy Valentine's Day! 💖";
    title.style.fontSize = "36px";
    title.style.fontWeight = "bold";
    title.style.textShadow = "2px 2px 5px rgba(0, 0, 0, 0.3)";
    
    const button = document.createElement("button");
    button.id = "valentineButton";
    button.textContent = "Click for a Sweet Message!";
    button.style.background = "#ff4e78";
    button.style.color = "white";
    button.style.padding = "12px 24px";
    button.style.fontSize = "20px";
    button.style.border = "none";
    button.style.borderRadius = "25px";
    button.style.cursor = "pointer";
    button.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
    button.style.transition = "transform 0.2s, box-shadow 0.2s";
    
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.boxShadow = "0px 8px 15px rgba(0, 0, 0, 0.3)";
    });
    
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
        button.style.boxShadow = "0px 6px 10px rgba(0, 0, 0, 0.2)";
    });
    
    button.addEventListener("click", showMessage);
    
    const message = document.createElement("p");
    message.id = "message";
    message.style.marginTop = "20px";
    message.style.fontSize = "24px";
    message.style.fontWeight = "bold";
    message.style.padding = "15px";
    message.style.background = "rgba(255, 255, 255, 0.2)";
    message.style.borderRadius = "10px";
    message.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    message.style.maxWidth = "400px";
    message.style.textAlign = "center";
    
    const footer = document.createElement("p");
    footer.innerHTML = `Coded by <a href="https://github.com/AlbertAdekanye" target="_blank" style="color: white; text-decoration: none; font-weight: bold;">AlbertAdekanye</a>`;
    footer.style.marginTop = "40px";
    footer.style.fontSize = "18px";
    footer.style.opacity = "0.8";

    container.appendChild(title);
    container.appendChild(greeting);
    container.appendChild(button);
    container.appendChild(message);
    container.appendChild(footer);
    document.body.appendChild(container);
});
