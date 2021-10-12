class User < ApplicationRecord
    has_secure_password
    has_many :vehicles

    validates :username, presence: true, uniqueness: true
    validates :username, length: { minimum: 2 }
    validates :password, precense: true
    validates :password_confirmation, presence: true
end
