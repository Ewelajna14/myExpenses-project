class ChangeDataTypeInExpenses < ActiveRecord::Migration[6.1]
  def up
    change_column :expenses, :amount, :float
  end

  def down
    change_column :expenses, :amount, :integer
  end
end
