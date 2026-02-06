
import { useStore } from '../store/store' // Adjust path if needed
import { Moon, Sun, Trash2 } from 'lucide-react' // Optional icons



function SettingsPage() {
  const { theme, toggleTheme, todos, categories } = useStore()

  // Handler to clear localStorage for testing
  const handleReset = () => {
    if (confirm("DANGER: This will delete ALL data. Are you sure?")) {
      localStorage.clear()
      window.location.reload()
    }
  }

  return (
    <div className="p-6 max-w-lg mx-auto space-y-8">
      <h1 className="text-3xl font-bold dark:text-white">Settings</h1>

      {/* --- SECTION 1: APPEARANCE --- */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Appearance</h2>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${theme === 'dark' ? 'bg-indigo-500 text-white' : 'bg-yellow-100 text-yellow-600'}`}>
              {theme === 'dark' ? <Moon size={20} /> : <Sun size={20} />}
            </div>
            <div>
              <p className="font-medium dark:text-white">Dark Mode</p>
              <p className="text-xs text-gray-400">
                {theme === 'dark' ? 'On' : 'Off'}
              </p>
            </div>
          </div>

          
          <button 
            onClick={toggleTheme}
            className={`
              w-14 h-8 rounded-full p-1 transition-colors duration-300 flex items-center
              ${theme === 'dark' ? 'bg-blue-600 justify-end' : 'bg-gray-300 justify-start'}
            `}
          >
            <div className="w-6 h-6 bg-white rounded-full shadow-md" />
          </button>
        </div>
      </section>

      {/* --- SECTION 2: DATA MANAGEMENT --- */}
      <section className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm border border-gray-100 dark:border-gray-700">
        <h2 className="text-sm font-semibold text-gray-500 mb-4 uppercase tracking-wider">Data</h2>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-300">Total Todos</span>
            <span className="font-bold dark:text-white">{todos.length}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-600 dark:text-gray-300">Total Categories</span>
            <span className="font-bold dark:text-white">{categories.length}</span>
          </div>

          <hr className="border-gray-100 dark:border-gray-700" />

          <button 
            onClick={handleReset}
            className="w-full flex items-center justify-center gap-2 text-red-500 bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/40 p-3 rounded-lg transition-colors font-medium"
          >
            <Trash2 size={18} />
            Reset All Data
          </button>
        </div>
      </section>

      
    </div>
  )
}
export default SettingsPage;