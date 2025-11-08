// let choice;
// let entity = 1000;
// while (true) {
//   choice = prompt(
//     "انتخاب خود را وارد کنید \n 1 موجودی حساب \n 2 برداشت وجه \n  3 انتقال وجه \n  4 خروج \n"
//   );

//   choice = parseInt(choice);

//   if (choice === 1) console.log(`موجودی حساب شما${entity} است`);
//   else if (choice === 2) {
//     let b = parseInt(prompt("مقدار برداشت را وارد کنید"));
//     if (entity !== 0) {
//       entity -= b;
//       console.log(`موجودی حساب شما${entity} است`);
//     }
//   } else if (choice === 3) {
//     let des = prompt("لطفا شماره مقصد را وارد کنید");
//     let b = parseInt(prompt("مقدار انتقال را وارد کنید"));
//     if (entity !== 0) {
//       entity -= b;
//       console.log(`موجودی حساب شما${entity} است`);
//     }
//   }
//   if (choice === 4) break;
// }

// ---------------------------------------------------------------------
let choice;
let balance = 1000;
do {
  choice = parseInt(
    prompt(
      "انتخاب خود را وارد کنید: \n 1.موجودی حساب \n 2.برداشت وجه   \n 3.انتقال وجه  \n 4.خروج  \n"
    )
  );
  switch (choice) {
    case 1:

      console.log(`موجودی حساب شما ${balance} تومان است`);
      break;

    case 2:

      let amount = parseInt(prompt("مبلغ خود را وارد کنید"));

      if (amount <= balance && amount > 0) {
        balance -= amount;
        console.log(
          ` شما مبلغ ${amount} تومان را برداشت کردید   موجودی حساب شما${balance} تومان است`
        );
      } else {
        console.log("موجودی حساب کافی نیست");
      }
      break;

    case 3:

      let amountAccount = parseInt(prompt("مبلغ مورد نظرخود را وارد کنید"));
      let receviedAcount = prompt("شماره حساب مقصد را وارد کتید:");

      if (amountAccount <= balance && amountAccount > 0) {
        balance -= amountAccount;
        console.log(
          `مبلغ ${amountAccount} به شماره حساب ${receviedAcount} واریز گردید . موجودی حساب شما${balance} است`
        );
      } else {
        console.log("موجودی حساب کافی نیست");
      }
      break

    case 4:

      console.log('به امید دیدار مجدد ');
      break

    default:
      console.log('انتخاب شما صحیح نمی باشد');
        
        
  }
  
} while (choice !== 4);
