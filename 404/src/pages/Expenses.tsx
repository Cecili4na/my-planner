import React, { useState } from 'react';

interface Transaction {
  id: number;
  description: string;
  amount: number;
  type: 'expense' | 'income';
  date: string;
}

const Expenses = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: 'expense',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const transaction: Transaction = {
      id: Date.now(),
      description: newTransaction.description,
      amount: parseFloat(newTransaction.amount),
      type: newTransaction.type as 'expense' | 'income',
      date: new Date().toISOString().split('T')[0],
    };
    setTransactions([...transactions, transaction]);
    setNewTransaction({ description: '', amount: '', type: 'expense' });
  };

  const totalIncome = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, curr) => acc + curr.amount, 0);

  const totalExpenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          Despesas e Lucros
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-green-900">Receitas</h3>
            <p className="text-2xl font-bold text-green-700">
              R$ {totalIncome.toFixed(2)}
            </p>
          </div>
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-900">Despesas</h3>
            <p className="text-2xl font-bold text-red-700">
              R$ {totalExpenses.toFixed(2)}
            </p>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-900">Saldo</h3>
            <p className="text-2xl font-bold text-blue-700">
              R$ {(totalIncome - totalExpenses).toFixed(2)}
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Descrição"
              value={newTransaction.description}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, description: e.target.value })
              }
              className="border rounded-lg p-2"
              required
            />
            <input
              type="number"
              placeholder="Valor"
              value={newTransaction.amount}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, amount: e.target.value })
              }
              className="border rounded-lg p-2"
              required
            />
            <select
              value={newTransaction.type}
              onChange={(e) =>
                setNewTransaction({ ...newTransaction, type: e.target.value })
              }
              className="border rounded-lg p-2"
            >
              <option value="expense">Despesa</option>
              <option value="income">Receita</option>
            </select>
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            Adicionar Transação
          </button>
        </form>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Histórico de Transações
        </h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <div
              key={transaction.id}
              className={`p-4 rounded-lg ${
                transaction.type === 'income' ? 'bg-green-50' : 'bg-red-50'
              }`}
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-semibold">{transaction.description}</p>
                  <p className="text-sm text-gray-600">{transaction.date}</p>
                </div>
                <p
                  className={`font-bold ${
                    transaction.type === 'income'
                      ? 'text-green-700'
                      : 'text-red-700'
                  }`}
                >
                  {transaction.type === 'income' ? '+' : '-'} R${' '}
                  {transaction.amount.toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expenses; 