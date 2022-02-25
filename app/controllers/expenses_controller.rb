class ExpensesController < ApplicationController

    def index
        expenses = Expense.all
        render json: expenses, each_serializer: ExpenseSerializer
    end

end
