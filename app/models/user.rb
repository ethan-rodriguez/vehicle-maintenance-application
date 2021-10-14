class User < ApplicationRecord
    has_secure_password
    has_many :vehicles

    validates :username, presence: true, uniqueness: true, length: { minimum: 2 }
    validates :email, presence: true, uniqueness: true, format: { with: /\A[^@\s]+@[^@\s]+\z/, message: 'is not a valid format' }
    validates :password, presence: true, length: { minimum: 4}
    validates :password_confirmation, presence: true, length: { minimum:4 }
end
