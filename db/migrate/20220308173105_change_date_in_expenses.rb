class ChangeDateInExpenses < ActiveRecord::Migration[6.1]
    def up
      change_column :expenses, :date, :string
    end
  
    def down
      change_column :expenses, :date, :date
    end

end
