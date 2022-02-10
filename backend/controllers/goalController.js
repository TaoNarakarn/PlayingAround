// Desc     Get goals
// Method   GET
// route    /api/goals
// access   Private
const getGoals = (req, res) => {
  res.status(200).json({
    message: 'Get goals'
  })
}

// Desc     Set,Create goals
// Method   POST
// route    /api/goals
// access   Private
const setGoal = (req, res) => {
  res.status(200).json({
    method: 'post',
    message: 'Create goals'
  })
}

// Desc     Update goal
// Method   PUT
// route    /api/goals/:id
// access   Private
const updateGoal = (req, res) => {
  res.status(200).json({
    method: 'put',
    message: `Update goals ${req.params.id}`
  })
}

// Desc     Delete goal
// Method   DELETE
// route    /api/goals/:id
// access   Private
const deleteGoal = (req, res) => {
  res.status(200).json({
    method: 'delete',
    message: `Delete goals ${req.params.id}`
  })
}

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}