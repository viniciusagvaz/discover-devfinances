const Modal = {
   modalToggle() {
      document
         .querySelector(".modal-overlay")
         .classList
         .toggle('active')
   }
}


const transactions = [
   {
      id: 1,
      description: 'Luz',
      amount: -30000,
      date: ''
   },
   {
      id: 2,
      description: 'Criação website',
      amount: 600000,
      date: ''
   },
   {
      id: 3,
      description: 'Internet',
      amount: -20000,
      date: ''
   }
]


const Transaction = {
   all: transactions,
   add(transaction) {
      transaction.all.push(transaction)
      App.reload()
   },

   incomes() {
      let income = 0;
      Transaction.all.forEach(transaction => {
         if (transaction.amount > 0) {
            income += transaction.amount
         }
      })
      return income
   },

   expenses() {
      let expense = 0;
      Transaction.all.forEach(transaction => {
         if (transaction.amount < 0) {
            expense += transaction.amount
         }
      })
      return expense
   },

   total() {
      return Transaction.incomes() + Transaction.expenses()
   }
}


const DOM = {
   transactionsContainer: document.querySelector('#data-table tbody'),

   addTransaction(transaction, index) {
      const tr = document.createElement('tr')
      tr.innerHTML = DOM.innerHTMLTransaction(transaction)

      DOM.transactionsContainer.appendChild(tr)
   },
   innerHTMLTransaction(transaction) {
      const CSSclass = transaction.amount > 0 ? "income" : "expense"

      const amount = Utils.formatCurrency(transaction.amount)

      const html = `
      <td class="description">${transaction.description}</td>
      <td class="${CSSclass}">${amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
         <img src="./assets/minus.svg" alt="Remover transação">
      </td>
      `

      return html
   },
   updateBalance() {
      document
         .querySelector('#incomeDisplay')
         .innerHTML = Utils.formatCurrency(Transaction.incomes())
      document
         .querySelector('#expenseDisplay')
         .innerHTML = Utils.formatCurrency(Transaction.expenses())
      document
         .querySelector('#totalDisplay')
         .innerHTML = Utils.formatCurrency(Transaction.total())
   }
}


const Utils = {
   formatCurrency(value) {
      const signal = Number(value) < 0 ? "-" : ""

      value = String(value).replace(/\D/g, "")
      value = Number(value) / 100
      value = value.toLocaleString("pt-br", {
         style: "currency",
         currency: "BRL"
      })


      return signal + value
   }
}


const App = {
   init() {
      Transaction.all.forEach(transaction => {
         DOM.addTransaction(transaction)
      })


      DOM.updateBalance()


      Transaction.add({
         id: 39,
         description: 'Alo',
         amount: 2000,
         date: '23/02/2021'
      })
   },
   reload() {
      App.init()
   }
}


App.init(){

}