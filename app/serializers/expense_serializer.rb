class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :category_id
  belongs_to :user
  belongs_to :category
end
