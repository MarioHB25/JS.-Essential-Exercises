let texto = '';

do {
    opcion = parseInt(prompt('Enter an option between: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11'));
        
    switch (opcion) {
        case 1:
            console.log('1 - Duplicate text');
            console.log(`Original: ${texto}`);
            console.log(`Copy: ${texto}`);                
            break;
        case 2:
            console.log('2 - Replace one string with another in the text');
            let str = prompt('What string do you want to replace?:');
            let str1 = prompt('Write the new string:');
            console.log(texto.replace(str, str1));
            break;
        case 3:
            console.log('3 - Add text');
            let txt = prompt('Enter the new text:');
            texto = texto.concat(txt, ' ');
            console.log(texto);
            break;
        case 4:
            console.log('4 - Enter two numbers as indexes to trim the text.');
            let indiceUno = parseInt(prompt('Specify the position from which the substring should start'));
            let indiceDos = parseInt(prompt('Indicate the position in which the substring should end'));
            console.log(texto.slice(indiceUno, (indiceDos + 1)));
            break;
        case 5:
            console.log('5 - Delete a word from the text.');
            let palabra = prompt('Enter the word you want to delete:');
            texto = texto.replaceAll(palabra, '')
            console.log(texto);
            break;
        case 6:
            console.log('6 - Searches for a string within the text and returns a message saying whether it was found or not.');
            let string = prompt('Enter the string you want to search for in your text:');
            if (texto.includes(string)) {
                console.log('The entered string IS found in the text');
            } else {
                console.log('The entered string is NOT found in the text.');
            };
            break;
        case 7:
            console.log('7 - Put all text in capital letters.');
            console.log(texto.toUpperCase());
            break;
        case 8:
            console.log('8 - Put all text in lower case.');
            console.log(texto.toLowerCase());
            break;
        case 9:
            console.log('9 - Show how many letters the text has without spaces.');
            contarLetras = texto.replaceAll(' ', '');
            console.log(`The text contains ${contarLetras.length} letters.`);
            break;
        case 10:
            console.log('10 - Show how many words the text has.');
            let contarPalabras = texto.split(' ');
            console.log(`The text contains ${contarPalabras.length-1} word/s.`);
            break;
        case 11:
            console.log('11 - Convert text to "Hacker Speak"');
            let textoMinus = texto.toLowerCase();
            let hSe = textoMinus.replaceAll('e', '3');
            let hSei = hSe.replaceAll('i', '1');
            let hSeio = hSei.replaceAll('o', '0');
            console.log(hSeio);
            break;
    };
        
} while (opcion === 1 || opcion === 2 || opcion === 3 || opcion === 4 || opcion === 5 || opcion === 6 || opcion === 7 || opcion === 8 || opcion === 9 || opcion === 10 || opcion === 11 || opcion === 12);
console.log('Execution finished. Until another time!');


