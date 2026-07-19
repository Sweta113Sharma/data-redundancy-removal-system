import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, CheckCircle, Circle, Plus, Trash2, HelpCircle, Sparkles, Loader2, X } from 'lucide-react'
import { aiService } from '../services/aiService'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05, delayChildren: 0.1 }
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

export default function SubjectDetailView({ context }) {
  const {
    selectedSubject, setSelectedUnit, selectedBranch, selectedSemester,
    navigateTo, goHome, subjectColors, getSubjectProgress, setSubjectProgress,
    getUnitProgress, setUnitProgress, getTodos, saveTodos, getQuizzes
  } = context

  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState('')
  const [aiLoading, setAiLoading] = useState(false)
  const [aiSummary, setAiSummary] = useState(null)

  useEffect(() => {
    if (selectedSubject) {
      setTodos(getTodos(selectedSubject.id))
    }
  }, [selectedSubject])

  if (!selectedSubject) return null

  const colors = subjectColors[selectedSubject.key] || subjectColors.default
  const progress = getSubjectProgress(selectedSubject.id)
  const quizzes = getQuizzes(selectedSubject.id)

  const handleUnitToggle = (unitTitle) => {
    const current = getUnitProgress(selectedSubject.id, unitTitle)
    setUnitProgress(selectedSubject.id, unitTitle, !current)
  }

  const handleAddTodo = () => {
    if (!newTodo.trim()) return
    const updated = [...todos, { text: newTodo.trim(), done: false }]
    setTodos(updated)
    saveTodos(selectedSubject.id, updated)
    setNewTodo('')
  }

  const handleTodoToggle = (index) => {
    const updated = [...todos]
    updated[index].done = !updated[index].done
    setTodos(updated)
    saveTodos(selectedSubject.id, updated)
  }

  const handleDeleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index)
    setTodos(updated)
    saveTodos(selectedSubject.id, updated)
  }

  const openUnit = (unit) => {
    setSelectedUnit(unit)
    navigateTo('unit-detail')
  }

  const startQuiz = () => {
    context.setCurrentQuiz(null)
    context.setQuizState({ currentIndex: 0, score: 0, selectedOption: null })
    navigateTo('quiz')
  }

  const handleAISubjectQuiz = async () => {
    setAiLoading(true)
    try {
      const mcqs = await aiService.generateSubjectQuiz(selectedSubject.title, selectedSubject.units)
      context.setCurrentQuiz({
        id: `ai-subject-${Date.now()}`,
        title: `AI Comprehensive: ${selectedSubject.title}`,
        questions: mcqs
      })
      context.setQuizState({ currentIndex: 0, score: 0, selectedOption: null, completed: false })
      navigateTo('quiz')
    } catch (e) {
      alert('AI Quiz generation failed: ' + e.message)
    } finally {
      setAiLoading(false)
    }
  }

  const handleAISubjectSummary = async () => {
    setAiLoading(true)
    try {
      const combinedContent = selectedSubject.units.map(u => `${u.title}: ${u.aiSummary || ''}`).join('\n\n')
      const summary = await aiService.generateSummary(combinedContent)
      setAiSummary(summary)
    } catch (e) {
      alert('Summary generation failed: ' + e.message)
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <motion.div
      className="space-y-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        onClick={() => navigateTo('subjects')}
        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors py-1 px-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 w-fit"
        variants={itemVariants}
        whileHover={{ x: -4 }}
        whileTap={{ scale: 0.92 }}
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Subjects
      </motion.button>

      <motion.div
        className="p-6 rounded-2xl glass-card relative overflow-hidden"
        variants={itemVariants}
      >
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl md:text-3xl font-display font-bold tracking-tight">
              {selectedSubject.title}
            </h1>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <button
              onClick={handleAISubjectSummary}
              disabled={aiLoading}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white font-medium text-sm flex items-center gap-2 hover:bg-white/10 transition-all disabled:opacity-50"
            >
              {aiLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Sparkles className="w-4 h-4 text-amber-400" />}
              AI Overview
            </button>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-muted-foreground">Overall Progress</span>
            <span className="font-bold" style={{ color: colors.border }}>{progress}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: colors.border }}
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {aiSummary && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="glass-card rounded-2xl p-6 relative"
          >
            <button 
              onClick={() => setAiSummary(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              AI Subject Overview
            </h3>
            <div className="prose prose-invert max-w-none text-sm text-foreground/80 whitespace-pre-wrap">
              {aiSummary}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-primary" />
          Units
        </h2>
        <div className="space-y-3">
          {selectedSubject.units.map((unit, i) => {
            const done = getUnitProgress(selectedSubject.id, unit.title)
            return (
              <motion.div
                key={i}
                onClick={() => openUnit(unit)}
                className={`w-full p-4 rounded-xl flex items-center gap-4 text-left transition-all cursor-pointer ${
                  done ? 'bg-white/5 opacity-60' : 'glass-card hover:bg-white/10'
                }`}
                variants={itemVariants}
                whileHover={{ scale: 1.01, x: 4 }}
                whileTap={{ scale: 0.99 }}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    handleUnitToggle(unit.title)
                  }}
                  className="flex-shrink-0 cursor-pointer"
                >
                  {done ? (
                    <CheckCircle className="w-6 h-6" style={{ color: colors.border }} />
                  ) : (
                    <Circle className="w-6 h-6 text-muted-foreground" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-medium ${done ? 'line-through text-muted-foreground' : ''}`}>
                    {unit.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {unit.youtube?.length || 0} videos • {unit.ppts?.length || 0} PPTs • AI notes
                  </p>
                </div>
                <span className="text-muted-foreground">→</span>
              </motion.div>
            )
          })}
        </div>
      </motion.div>

      <motion.div variants={itemVariants}>
        <h2 className="text-lg font-display font-semibold mb-4 flex items-center gap-2">
          <span className="w-1 h-5 rounded-full bg-emerald-500" />
          Important Topics
        </h2>
        <div className="glass-card rounded-xl p-4 space-y-3">
          {todos.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-4">
              No topics added yet. Add important topics to track your study goals!
            </p>
          ) : (
            todos.map((todo, i) => (
              <motion.div
                key={i}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  todo.done ? 'bg-white/5 opacity-60' : 'bg-white/5'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={() => handleTodoToggle(i)}
                  className="w-5 h-5 rounded border-border accent-emerald-500"
                />
                <span className={`flex-1 text-sm ${todo.done ? 'line-through text-muted-foreground' : ''}`}>
                  {todo.text}
                </span>
                <button
                  onClick={() => handleDeleteTodo(i)}
                  className="p-1 hover:text-destructive transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </motion.div>
            ))
          )}
          <div className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAddTodo()}
              placeholder="Add an important topic..."
              className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
            />
            <button
              onClick={handleAddTodo}
              className="px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:brightness-110 transition-all"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}