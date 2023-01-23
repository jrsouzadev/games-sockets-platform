export function generateId(length = 8) {
    const numbers = '1234567890'
    const letters = 'bcdfghjklmnpqrstvwxz'
    const characters = letters + numbers + letters.toUpperCase()
    let id = ''
    for (let i = 0; i < length; i++) {
        id = id + characters[Math.floor(Math.random() * characters.length)]
    }
    return id
}

export function generateRandomName(size = 3) {
    const namesList = [
        'Karma', 'Walsh', 'Alexis', 'Werner',
        'Aryanna', 'Brennan', 'Johnny', 'Blackburn',
        'Payton', 'Levy', 'Abbey', 'Tyler',
        'Jagger', 'Wilkinson', 'Aidyn', 'Monroe',
        'Kinley', 'Doyle', 'Rubi', 'Fry',
        'Iris', 'Maynard', 'Kaitlynn', 'Cross',
        'Kamora', 'Gilbert', 'Jerimiah', 'Evans',
        'Frank', 'Kane', 'Allan', 'Casey',
        'Keagan', 'Gallegos', 'Russell', 'Prince',
        'Tyler', 'Massey', 'Areli', 'Benson', 'João'
    ]

    const nickNamesList = [
        'Beefy', 'Cheeseball', 'Cheesy', 'Chewbacca',
        'Chipmunk', 'Class Clown', 'Comedian', 'Doofy',
        'Fuzzy Wuzzy', 'Giggles', 'Goofball', 'Goofy',
        'Jokes', 'Meatball', 'Noodles', 'Pork Chop',
        'Punk', 'Q - Tip', 'Silly Goof', 'Spaghetti',
        'Squints', 'Squirrel', 'Squirt', 'Stinker',
        'String bean', 'Tater', 'Tater Tot', 'Tiny',
        'Tootsie Pop', 'Amateur', 'Bing Bong', 'Buffoon',
        'Bumblebee', 'Burrito', 'Cheeks', 'Chipmunk Cheeks',
        'Chippy', 'Chubs', 'Chunkamunk', 'Clumsy Wumsy',
        'Comic', 'Crazy', 'Doink', 'Donkey',
        'Duckie', 'Dumbo', 'Fish Face', 'Funny man',
        'Butterfingers', 'Hater', 'Haterade', 'Hefty Wefty',
        'Jabba', 'Jazzy', 'Jokester', 'Kooky',
        'Lonely', 'Madcap', 'Mando', 'McLovin',
        'Noob', 'Nut', 'Nutty', 'Rico Suave',
        'Rook', 'Rookie', 'Screech', 'Screwball',
        'Spock', 'Summer Teeth', 'Third Wheeler –', 'Urkel',
        'Zany', 'Weird Beard', 'Cookie'
    ]

    const names = [
        namesList[Math.floor(Math.random() * namesList.length)],
        nickNamesList[Math.floor(Math.random() * nickNamesList.length)],
        namesList[Math.floor(Math.random() * namesList.length)]
    ]

    if (size === 1) return names[0]
    if (size === 2) return `${names[0]} ${names[2]}`
    return `${names[0]} '${names[1]}' ${names[2]}`
}