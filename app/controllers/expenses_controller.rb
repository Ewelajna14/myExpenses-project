class ExpensesController < ApplicationController


    #path /users/:user_id/expenses  action expenses#index
    def index
        user = User.find(params[:user_id])
        expenses = user.expenses
        render json: expenses, each_serializer: ExpenseSerializer
    end


    #path /users/user_id/expenses
    def create
        user = User.find(params[:user_id])
        expense = user.expenses.create(expense_params)
        render json: expense, status: :created
    end

    #path /users/user_id/expenses:id  action#show


    private
    def expense_params
        params.require(:expense).permit( :amount, :user_id, :category_id, :category)
    end
end
