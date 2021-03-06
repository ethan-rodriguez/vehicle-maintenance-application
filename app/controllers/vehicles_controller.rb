class VehiclesController < ApplicationController
  before_action :set_vehicle, only: [:show, :update, :destroy]
  wrap_parameters :vehicle, include: [:year, :make, :model, :vin, :mileage, :vehicle_notes, :image_url, :user_id]

  # GET /vehicles
  def index
    @vehicles = Vehicle.all

    render json: @vehicles
  end

  # GET /vehicles/1
  def show
    render json: @vehicle
  end

  # POST /vehicles
  def create
    if session[:user_id]
      @vehicle = Vehicle.new(vehicle_params)
      @vehicle.update!(user_id: session[:user_id])
        render json: @vehicle, status: :created, location: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /vehicles/1
  def update
    if @vehicle.update(vehicle_params)
      render json: @vehicle
    else
      render json: @vehicle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /vehicles/1
  def destroy
    @vehicle.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_vehicle
      @vehicle = Vehicle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def vehicle_params
      params.require(:vehicle).permit(:year, :make, :model, :vin, :mileage, :vehicle_notes, :image_url, :user_id)
    end
end
