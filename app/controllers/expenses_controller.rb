class ExpensesController < ApplicationController

    def index
        expenses = Expense.all
        render json: expenses, each_serializer: ExpenseSerializer
    end

    def create
        expense = Expense.create(expense_params)
        render json: expense, status: :created
    end


    private
    def expense_params
        params.permit( :amount, :user_id, :category_id, :category )
    end
end
