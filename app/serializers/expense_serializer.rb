class ExpenseSerializer < ActiveModel::Serializer
  attributes :id, :amount, :user_id, :category_id, :created_at, :updated_at
  belongs_to :user
  belongs_to :category
end
