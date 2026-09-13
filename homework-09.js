import { comments } from "./comments.js"; //6 задание
console.log(comments);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //2 задание
const result = numbers.filter((number) => number>=5);
console.log(result);

const colors = ["red", "green", "blue", "yellow", "orange"]; //3 задание
const newArray = colors.includes("green");
console.log(newArray);

function reverseArray(arr) {
    return arr.reverse();
}
console.log(reverseArray(numbers));
console.log(reverseArray(colors));

//7 задание
const comComments = comments.filter((comment) => comment.email.includes(".com"));
console.log(comComments);

//8 задание
const transformedComments = comments.map((comment) => {
    if (comment.id <= 5) {
        return { ...comment, postId: 2 };
    } else {
        return { ...comment, postId: 1 };
    }
});
console.log(transformedComments);

//9 задание
const idAndNameComments = comments.map((comment) => {
    return { id: comment.id, name: comment.name };
});
console.log(idAndNameComments);

//10 задание
const invalidComments = comments.map((comment) => {
    return { ...comment, isInvalid: comment.body.length > 180 };
});
console.log(invalidComments);

//11 задание
const emailsWithReduce = comments.reduce((acc, comment) => {
    acc.push(comment.email);
    return acc;
}, []);
console.log(emailsWithReduce);

const emailsWithMap = comments.map((comment) => comment.email);
console.log(emailsWithMap);

//12 задание
const emailsAsString = emailsWithReduce.toString();
console.log(emailsAsString);

const emailsAsJoinedString = emailsWithReduce.join(", ");
console.log(emailsAsJoinedString);