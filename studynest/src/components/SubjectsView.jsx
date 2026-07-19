import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Clock, CheckCircle } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 120, damping: 14 }
  }
}

export default function SubjectsView({ context }) {
  const { 
    selectedYear, selectedBranch, setSelectedSemester, selectedSemester,
    semesters, subjectColors, getSubjectProgress, navigateTo, goHome
  } = context

  const [availableSemesters, setAvailableSemesters] = useState([])

  useEffect(() => {
    const branchData = semesters[selectedBranch]
    if (branchData) {
      const yearToSem = { 1: [1, 2], 2: [3, 4], 3: [5, 6], 4: [7, 8] }
      const possible = yearToSem[selectedYear] || []
      const available = possible.filter(s => branchData[s])
      setAvailableSemesters(available)
      
      // Keep the current semester if it is valid for this year
      if (selectedSemester && possible.includes(selectedSemester)) {
        // Keep it
      } else if (available.length > 0) {
        setSelectedSemester(available[0])
      } else {
        setSelectedSemester(null)
      }
    }
  }, [selectedYear, selectedBranch])

  const branchData = semesters[selectedBranch]
  const subjects = branchData?.[selectedSemester] || []

  const branch = { name: 'Branch', icon: '📚' }
  if (selectedBranch === 'cse') branch.name = 'Computer Science'
  if (selectedBranch === 'ece') branch.name = 'Electronics'
  if (selectedBranch === 'me') branch.name = 'Mechanical'
  if (selectedBranch === 'ce') branch.name = 'Civil'
  if (selectedBranch === 'ee') branch.name = 'Electrical'

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={goHome}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-fit"
        variants={itemVariants}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.92 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </motion.button>

      <motion.div variants={itemVariants}>
        <h1 className="text-2xl md:text-3xl font-display font-bold mb-2">
          {branch.name} Engineering
        </h1>
        <p className="text-muted-foreground">Year {selectedYear}</p>
      </motion.div>

      <motion.div variants={itemVariants}>
        <div className="flex gap-2 flex-wrap">
          {availableSemesters.map((sem) => (
            <button
              key={sem}
              onClick={() => setSelectedSemester(sem)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedSemester === sem
                  ? 'bg-primary text-white shadow-glow'
                  : 'glass-card border border-white/5 hover:border-primary/30'
              }`}
            >
              Semester {sem}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
      >
        {subjects.length === 0 ? (
          <motion.div
            className="col-span-full text-center py-12 glass-card rounded-2xl"
            variants={itemVariants}
          >
            <BookOpen className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <p className="text-muted-foreground">No subjects available for this semester yet.</p>
          </motion.div>
        ) : (
          subjects.map((subject, i) => {
            const colors = subjectColors[subject.key] || subjectColors.default
            const progress = getSubjectProgress(subject.id)
            
            return (
              <motion.button
                key={subject.id}
                onClick={() => {
                  context.setSelectedSubject(subject)
                  navigateTo('subject-detail')
                }}
                className="group relative p-5 rounded-2xl text-left transition-all duration-300 glass-card"
                style={{
                  borderLeft: `3px solid ${colors.border}`
                }}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -4 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: 'rgba(255,255,255,0.1)' }}
                  >
                    {colors.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold truncate">{subject.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {subject.units.length} units
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium" style={{ color: colors.border }}>{progress}%</span>
                  </div>
                  <div className="h-1.5 bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: colors.border }}
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                    />
                  </div>
                </div>

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowLeft className="w-5 h-5 rotate-180" style={{ color: colors.border }} />
                </div>
              </motion.button>
            )
          })
        )}
      </motion.div>
    </motion.div>
  )
}