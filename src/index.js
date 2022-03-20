/**
 * const,letの変数宣言
 */

// var val1 = "varの変数";
// console.log(val1);

// // var変数の上書き
// val1 = "上書きするよ";
// console.log(val1);

// // 再宣言
// // 構文解析ツールでエラー出力あり
// var val1 = "再宣言するよ";
// console.log(val1);

// let val2 = "letの変数";
// console.log(val2);

// // letは上書き可能
// val2 = "上書きするよ";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "再宣言するよ";

// const val3 = "constの変数";
// console.log(val3);

// // constは上書き不可能
// const val3 = "上書きしようとするよ";

// // constは再宣言不可能
// const val3 = "再宣言しようとするよ";
// console.log(val3);

// //constで定義したobjはプロパティの変更・追加が可能
// const val4 = {
//   name: "いながき",
//   age: "23",
// };

// val4.name = "ばばくんが";
// val4.address = "nagoya";
// console.log(val4);

// //constで定義した配列はプロパティの変更・追加が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push("monkey");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "いながき";
// const age = 23;

// // 自己紹介の出力
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。"
// console.log(message1);

// // テンプレート文字列の活用
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function(str) {
//   return str;
// }
// console.log(func1("func1です。"));

// アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(20, 30));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "いながき",
//   age: 23,
// };

// const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です。`;
// console.log(message1);

// // 分割代入
// const {name, age} = myProfile;

// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

// const myProfile = ['イナガキ', 23];

// const message3 = `私の名前は${myProfile[0]}です。年齢は${myProfile[1]}です。`;
// console.log(message3);

// // 分割代入
// const [name, age] = myProfile;

// const message4 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは、${name}さん`);
// sayHello("いながき");

/**
 * スプレッド構文
 */
// // 配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);

// // スプレッド構文
// sumFunc(...arr1);

// // 配列をまとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;

// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピーと結合
// const arr4 = [20, 30];
// const arr5 = [40, 50];

// const arr6 = [...arr4];
// arr6[0] = 100;
// console.log(arr6);
// // 参照引継ぎは起こらない
// console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// // ただのコピーでは、参照引継ぎによる不具合が起こる懸念あり
// const arr8 = arr4;
// console.log(arr8);

// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);

/**
 * mapやfilterを使用した配列処理
 */
// const nameArr = ["田中", "山田", "イナガキ"];

// // 従来のfor文
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}さんです。`);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// })
// console.log(nameArr2);

// // indexは必要に応じて引数に追加
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "イナガキ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// // 条件 ? 条件がtrue : 条件がfalse
// const val1 = 1 < 0 ? `trueです` : `falseです`;
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? '許容値をオーバーしています' : '問題ありません';
// }
// console.log(checkSum(50, 40));

/**
 * 論理演算子の意味
 */
// const flag1 = true;
// const flag2 = true;

// if (flag1 || flag2) {
//   console.log("1か2のどちらかはtrueです。");
// }

// if (flag1 && flag2) {
//   console.log("1か2の両方がtrueです。");
// }

// // ||は左側がfalseなら右側を返す
// const num = 100;
// const fee = num || "金額を設定してください";
// console.log(fee);

// // &&は左側がtrueなら右側を返す
// const num2 = null;
// const fee2 = num2 && "設定されました";
// console.log(fee2);
