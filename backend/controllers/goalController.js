const asyncHandler = require('express-async-handler')

const Goal = require('../models/goalModel')
const User = require('../models/userModel')

// Desc     Get goals
// Method   GET
// route    /api/goals
// access   Private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id })
  res.status(200).json(goals)
}
)
// Desc     Set,Create goals
// Method   POST
// route    /api/goals
// access   Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a goal')
  }

  const goal = await Goal.create({
    user: req.user.id,
    text: req.body.text
  })
  res.status(200).json(goal)
}
)
// Desc     Update goal
// Method   PUT
// route    /api/goals/:id
// access   Private
const updateGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)
  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
  res.status(200).json(updatedGoal)
}
)
// Desc     Delete goal
// Method   DELETE
// route    /api/goals/:id
// access   Private
const deleteGoal = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id)

  if (!goal) {
    res.status(400)
    throw new Error('Goal not found')
  }
  const user = await User.findById(req.user.id)
  if (!user) {
    res.status(401)
    throw new Error('User not found')
  }
  if (goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }
  await Goal.remove(req.params.id)
  res.status(200).json({
    method: 'delete',
    id: req.params.id,
  })
}
)

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal
}