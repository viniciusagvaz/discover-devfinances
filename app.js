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
      amount: -50000,
      date: ''
   },
   {
      id: 2,
      description: 'Criação website',
      amount: 5000000,
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
   incomes() {

   },
   expenses() {

   },
   total() {

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
      <td class="${CSSclass}">${transaction.amount}</td>
      <td class="date">${transaction.date}</td>
      <td>
         <img src="./assets/minus.svg" alt="Remover transação">
      </td>
      `

      return html
   }
}


const Utils = {
   formatCurrency(value) {
      const signal = Number(value) < 0 ? "-" : ""
   }
}


transactions.forEach(transaction => {
   DOM.addTransaction(transaction)
})