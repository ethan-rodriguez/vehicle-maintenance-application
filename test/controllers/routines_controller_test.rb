require "test_helper"

class RoutinesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @routine = routines(:one)
  end

  test "should get index" do
    get routines_url, as: :json
    assert_response :success
  end

  test "should create routine" do
    assert_difference('Routine.count') do
      post routines_url, params: { routine: { routine: @routine.routine, vehicle_id: @routine.vehicle_id } }, as: :json
    end

    assert_response 201
  end

  test "should show routine" do
    get routine_url(@routine), as: :json
    assert_response :success
  end

  test "should update routine" do
    patch routine_url(@routine), params: { routine: { routine: @routine.routine, vehicle_id: @routine.vehicle_id } }, as: :json
    assert_response 200
  end

  test "should destroy routine" do
    assert_difference('Routine.count', -1) do
      delete routine_url(@routine), as: :json
    end

    assert_response 204
  end
end
