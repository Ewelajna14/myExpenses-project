class Expense < ApplicationRecord
    belongs_to :user
    belongs_to :category
    default_scope { order(amount: :desc)}
end
