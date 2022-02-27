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
        expense = user.expenses.create!(expense_params)
        render json: expense, status: :created
    end

    #path /users/user_id/expenses:id  action#show

    def show
        user = User.find(params[:user_id])
        expenses = user.expenses
        expenses = Expense.find(params[:id])
        render json: expenses
    end


    #path / users/user_id/expenses/:id action#update

    def update
        user = User.find(params[:user_id])
        expense = user.expenses
        expense = Expense.find(params[:id])
        expense = expense.update!(expense_params)
        render json: expense
    end

    #  /users/:user_id/expenses/:id

    def destroy
        user = User.find(params[:user_id])
        expense = user.expenses
        expense = Expense.find(params[:id])
        expense.destroy
        head :no_content
    end


    private
    def expense_params
        params.require(:expense).permit(:id, :amount, :user_id, :category_id, :category)
    end
end


