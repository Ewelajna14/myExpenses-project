class User < ApplicationRecord
    has_many :expenses
    has_many :categories, through: :expenses
    
    has_secure_password

    validates :first_name, presence: true
    validates :last_name, presence: true
    validates :username, presence: true, uniqueness: true
    
end
