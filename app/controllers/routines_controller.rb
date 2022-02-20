class RoutinesController < ApplicationController
  before_action :set_routine, only: [:show, :update, :destroy]
  # wrap_parameters :routine, include: [:routine, :vehicle_id]

  # GET /routines
  def index
    @routines = Routine.all

    render json: @routines
  end

  # GET /routines/1
  def show
    render json: @routine
  end

  # POST /routines
  def create
    @routine = Routine.new(routine_params)

    if @routine.save
      render json: @routine, status: :created, location: @routine
    else
      render json: @routine.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /routines/1
  def update
    if @routine.update(routine_params)
      render json: @routine
    else
      render json: @routine.errors, status: :unprocessable_entity
    end
  end

  # DELETE /routines/1
  def destroy
    @routine.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_routine
      @routine = Routine.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def routine_params
      params.permit(:routine, :vehicle_id)
    end
end
