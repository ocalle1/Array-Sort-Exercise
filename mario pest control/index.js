const form = document.billing

form.addEventListener("submit", function (e) {
    e.preventDefault()

    const goombaNum = form.goombaCriter.value
    const bobombNum = form.bombCriter.value
    const cheepcheepNum = form.cheepCriter.value

    const goombaTotal = goombaNum * 5
    const bobombTotal = bobombNum * 7
    const cheepcheepTotal = cheepcheepNum * 11

    const result = goombaTotal + bobombTotal + cheepcheepTotal
    // Displays the defined variable to the user
    console.log(" You owe " + goombaTotal + " coins for Goomba, \n " + bobombTotal + "coins for Bob-ombs, and \n" + cheepcheepTotal + "coins for Cheep Cheeps." + "\n\nYour total is" + result + "coins")
    // Show the total cost on the browser
    document.getElementById("total").innerHTML = " You owe " + goombaTotal + " coins for Goomba, \n " +
        bobombTotal + " coins for Bob-ombs, and \n " + cheepcheepTotal + " coins for Cheep Cheeps. " + "\n\n Your total is " + result + " coins "
})
