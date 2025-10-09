import express from 'express'
import { applyForJob, getUserData, getUserJobApplications, updateUserResume } from '../controllers/userController'

const router = express.Router()

// Get user Data 
router.get('/user',getUserData)

// Apply for a job
router.post ('/apply', applyForJob)

// Get applied jobs data
router.get('/applications', getUserJobApplications)

// Update user profile (resume)
router.post('/update-resume', upload.singke('resume'), updateUserResume)

export default router