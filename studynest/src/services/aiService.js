// src/services/aiService.js
class AIService {
  constructor() {
    this.apiKey = localStorage.getItem('studynest_openrouter_key') || import.meta.env.VITE_OPENROUTER_KEY || '';
    // Primary free model (April 2026)
    this.model = 'openai/gpt-oss-120b:free';
    
    const maskedKey = this.apiKey ? `${this.apiKey.substring(0, 10)}...` : 'NONE';
    console.log('AIService initialized');
    console.log('Default Model:', this.model);
    console.log('API Key:', maskedKey);
  }

  setApiKey(key) {
    this.apiKey = key;
    localStorage.setItem('studynest_openrouter_key', key);
  }

  hasApiKey() {
    return !!this.apiKey;
  }

  async callAI(messages, systemPrompt = '') {
    // Simulated delay for "realism"
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Mock responses for 2nd Year 4th Sem
    const userMessage = messages[messages.length - 1].content.toLowerCase();
    
    if (userMessage.includes('graph algorithms') || userMessage.includes('dsa-ii')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Data Structures & Algorithms II
This subject focuses on advanced algorithmic techniques, particularly graph-based solutions and complex data structures.

**Key Units & Concepts:**
1. **Graph Fundamentals**: Understanding V, E, and degree properties.
2. **Traversals**: BFS for shortest path in unweighted graphs; DFS for connectivity and topological sorting.
3. **Spanning Trees**: Prim's (vertex-based) and Kruskal's (edge-based) algorithms for MST.
4. **Shortest Paths**: Dijkstra's algorithm (Greedy approach) and Bellman-Ford (Dynamic Programming).
5. **Advanced Topics**: Flow networks, matching, and NP-completeness.

**Essential Formulas:**
- Handshaking Lemma: Σ deg(v) = 2|E|.
- Dijkstra Complexity with Fibonacci Heap: O(E + V log V).
- Kruskal Complexity: O(E log E) or O(E log V).

**Exam Strategy:**
Master the step-by-step execution of Dijkstra and Prim's. Theoretical questions often focus on comparing different algorithm paradigms (Greedy vs DP).`;
      }
      if (systemPrompt.includes('notes')) {
        return `### Revision Notes: Graph Algorithms
- **Graph Representation**:
  - Adjacency Matrix: Best for dense graphs, O(1) edge lookup.
  - Adjacency List: Best for sparse graphs, O(V+E) space.
- **BFS (Breadth-First Search)**:
  - Uses Queue.
  - Finds shortest path in unweighted graphs.
  - Level-order traversal.
- **DFS (Depth-First Search)**:
  - Uses Stack/Recursion.
  - Detects cycles in directed/undirected graphs.
- **MST (Minimum Spanning Tree)**:
  - A subgraph with all vertices and minimum total edge weight.
  - No cycles.`;
      }
      if (systemPrompt.includes('qa pairs')) {
        return `Q1: Define a Spanning Tree.
Answer: A spanning tree of a graph is a subgraph that includes all vertices of the original graph and is a tree (connected and acyclic).

Q2: What is the difference between BFS and DFS?
Answer: BFS explores neighbors first using a queue (level-by-level), while DFS explores as deep as possible along each branch before backtracking using a stack.

Q3: When does Dijkstra's algorithm fail?
Answer: It fails when the graph contains negative edge weights.`;
      }
      if (systemPrompt.includes('multiple-choice questions')) {
        const isSubject = systemPrompt.includes('comprehensive');
        const count = isSubject ? 10 : 5;
        const baseMcqs = [
          { "question": "Which data structure is used in BFS?", "options": ["Stack", "Queue", "Heap", "Tree"], "correctAnswer": 1, "explanation": "BFS uses a Queue to keep track of the next vertices to visit." },
          { "question": "What is the time complexity of Kruskal's algorithm?", "options": ["O(V^2)", "O(E log E)", "O(V+E)", "O(E^2)"], "correctAnswer": 1, "explanation": "Kruskal's algorithm takes O(E log E) time mainly due to sorting the edges." },
          { "question": "Dijkstra's algorithm cannot handle which type of edges?", "options": ["Positive weights", "Zero weights", "Negative weights", "Floating weights"], "correctAnswer": 2, "explanation": "Dijkstra's algorithm assumes non-negative edge weights for its greedy approach to work." },
          { "question": "A graph with no cycles is called:", "options": ["Acyclic", "Bipartite", "Complete", "Connected"], "correctAnswer": 0, "explanation": "An acyclic graph is a graph that contains no cycles." },
          { "question": "Which algorithm is vertex-based for finding MST?", "options": ["Kruskal's", "Prim's", "Dijkstra's", "Bellman-Ford"], "correctAnswer": 1, "explanation": "Prim's algorithm builds the MST by adding vertices one by one." },
          { "question": "What is the maximum number of edges in a simple graph with V vertices?", "options": ["V(V-1)/2", "V^2", "2V", "V-1"], "correctAnswer": 0, "explanation": "A complete graph K_v has V(V-1)/2 edges." },
          { "question": "Which traversal is used for Topological Sorting?", "options": ["BFS", "DFS", "Level Order", "Inorder"], "correctAnswer": 1, "explanation": "Topological sort is typically implemented using DFS by pushing finished nodes onto a stack." },
          { "question": "The Handshaking Lemma states that the sum of degrees is:", "options": ["Number of edges", "2 * Number of edges", "V - 1", "V / 2"], "correctAnswer": 1, "explanation": "Each edge contributes twice to the total sum of degrees." },
          { "question": "Bellman-Ford algorithm is used to find:", "options": ["MST", "All-pairs shortest path", "Single-source shortest path with negative weights", "Maximum flow"], "correctAnswer": 2, "explanation": "Bellman-Ford handles negative weights and detects negative cycles." },
          { "question": "In an adjacency matrix, checking if an edge exists takes:", "options": ["O(1)", "O(V)", "O(E)", "O(log V)"], "correctAnswer": 0, "explanation": "An adjacency matrix allows O(1) lookup of any edge (i, j)." }
        ];
        return JSON.stringify(baseMcqs.slice(0, count));
      }
    }

    if (userMessage.includes('er modeling') || userMessage.includes('dbms')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Database Management Systems
DBMS is a collection of programs that enables users to create and maintain a database.

**Key Units & Concepts:**
1. **Data Models**: ER Model (Conceptual), Relational Model (Logical).
2. **Relational Algebra**: Selection, Projection, Join, Union.
3. **SQL**: DDL (Create, Drop), DML (Insert, Select, Update), DCL (Grant, Revoke).
4. **Normalization**: Eliminating data redundancy (1NF, 2NF, 3NF, BCNF).
5. **Transactions**: ACID properties (Atomicity, Consistency, Isolation, Durability).

**Relational Rules:**
- Primary Key: Unique identifier, cannot be null.
- Foreign Key: Ensures referential integrity.
- Functional Dependency: X -> Y means X determines Y.

**Exam Strategy:**
Be proficient in converting ER diagrams to Relational Tables. SQL query writing and Normalization steps are mandatory for high scores.`;
      }
      if (systemPrompt.includes('notes')) {
        return `### Revision Notes: DBMS Essentials
- **ACID Properties**:
  - Atomicity: All or nothing.
  - Consistency: Valid state before and after.
  - Isolation: Concurrent transactions don't interfere.
  - Durability: Changes are permanent.
- **Normalization**:
  - 1NF: Atomic values.
  - 2NF: No partial dependency.
  - 3NF: No transitive dependency.
  - BCNF: For every X->Y, X is a super key.
- **Joins**:
  - Inner Join: Matching rows only.
  - Left Join: All from left + matches from right.`;
      }
      if (systemPrompt.includes('qa pairs')) {
        return `Q1: What is a Primary Key?
Answer: A primary key is a minimal set of attributes that uniquely identifies a tuple in a relation. It cannot contain null values.

Q2: Explain the difference between DELETE and TRUNCATE.
Answer: DELETE is a DML command that can be rolled back and removes rows one by one. TRUNCATE is a DDL command that removes all rows and cannot be rolled back easily.

Q3: What is a View?
Answer: A view is a virtual table based on the result-set of an SQL statement. It doesn't store data itself.`;
      }
      if (systemPrompt.includes('multiple-choice questions')) {
        const isSubject = systemPrompt.includes('comprehensive');
        const count = isSubject ? 10 : 5;
        const baseMcqs = [
          { "question": "Which normal form removes transitive dependencies?", "options": ["1NF", "2NF", "3NF", "BCNF"], "correctAnswer": 2, "explanation": "3NF ensures that all non-key attributes are functionally dependent only on the primary key." },
          { "question": "What represents a weak entity in an ER diagram?", "options": ["Rectangle", "Diamond", "Double Rectangle", "Ellipse"], "correctAnswer": 2, "explanation": "Weak entities are represented by double-lined rectangles." },
          { "question": "A multivalued attribute is represented by:", "options": ["Dashed Ellipse", "Double Ellipse", "Underlined Ellipse", "Rectangle"], "correctAnswer": 1, "explanation": "Double ellipses are used for multivalued attributes like Phone Numbers." },
          { "question": "In SQL, which clause is used to filter group results?", "options": ["WHERE", "FILTER", "HAVING", "GROUP BY"], "correctAnswer": 2, "explanation": "HAVING is used to filter results after the GROUP BY clause." },
          { "question": "The 'I' in ACID stands for:", "options": ["Integrity", "Isolation", "Indexing", "Iteration"], "correctAnswer": 1, "explanation": "Isolation ensures that concurrent transactions result in a system state as if transactions were executed serially." },
          { "question": "Which join returns all rows from the left table and matched rows from the right?", "options": ["Inner Join", "Right Join", "Left Join", "Full Join"], "correctAnswer": 2, "explanation": "Left Join (or Left Outer Join) returns all records from the left table." },
          { "question": "A primary key must be:", "options": ["Unique", "Not Null", "Both Unique and Not Null", "Auto-incremented"], "correctAnswer": 2, "explanation": "Primary keys must uniquely identify a row and cannot contain NULL values." },
          { "question": "Which level of abstraction describes HOW data is stored?", "options": ["Physical Level", "Logical Level", "View Level", "Conceptual Level"], "correctAnswer": 0, "explanation": "The physical level is the lowest level of data abstraction." },
          { "question": "Data redundancy leads to:", "options": ["Data Integrity", "Efficient Storage", "Anomalies", "Security"], "correctAnswer": 2, "explanation": "Redundancy causes insertion, deletion, and update anomalies." },
          { "question": "What command is used to remove a table from the database?", "options": ["DELETE", "REMOVE", "DROP", "TRUNCATE"], "correctAnswer": 2, "explanation": "DROP TABLE is used to remove the table structure and its data." }
        ];
        return JSON.stringify(baseMcqs.slice(0, count));
      }
    }

    if (userMessage.includes('introduction to os') || userMessage.includes('operating systems')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Operating Systems
An OS is the software that manages computer hardware and software resources.

**Key Units & Concepts:**
1. **Process Management**: Schedulers (Long, Medium, Short-term), PCB, Context Switch.
2. **CPU Scheduling**: Preemptive vs Non-preemptive algorithms.
3. **Deadlocks**: Necessary conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait).
4. **Memory Management**: Swapping, Paging, Segmentation, Fragmentation (Internal/External).
5. **Storage Management**: Disk scheduling (FCFS, SSTF, SCAN, C-SCAN).

**Performance Formulas:**
- CPU Utilization: Total time CPU is busy.
- Throughput: Processes completed per unit time.
- Turnaround Time: Completion Time - Arrival Time.

**Exam Strategy:**
Be prepared for Gantt chart numericals on Round Robin and SRTF. Deadlock avoidance (Banker's Algorithm) is a recurring high-weightage topic.`;
      }
      if (systemPrompt.includes('notes')) {
        return `### Revision Notes: OS Fundamentals
- **Process States**: New, Ready, Running, Waiting, Terminated.
- **CPU Scheduling**:
  - FCFS: Simple, Convoy effect.
  - SJF: Optimal average waiting time.
  - Round Robin: Time-sharing, uses time quantum.
- **Deadlock Conditions**:
  1. Mutual Exclusion
  2. Hold and Wait
  3. No Preemption
  4. Circular Wait
- **Virtual Memory**: Allows execution of processes not completely in memory using Demand Paging.`;
      }
      if (systemPrompt.includes('qa pairs')) {
        return `Q1: What is a System Call?
Answer: A system call is a programmatic way in which a computer program requests a service from the kernel of the operating system.

Q2: Explain Thrashing.
Answer: Thrashing occurs when a system spends more time swapping pages in and out of memory than executing processes, usually due to low physical memory.

Q3: Difference between Paging and Segmentation.
Answer: Paging divides memory into fixed-size blocks (pages/frames), while segmentation divides memory into logical units (segments) of varying sizes.`;
      }
      if (systemPrompt.includes('multiple-choice questions')) {
        const isSubject = systemPrompt.includes('comprehensive');
        const count = isSubject ? 10 : 5;
        const baseMcqs = [
          { "question": "Which scheduling algorithm can lead to starvation?", "options": ["Round Robin", "FCFS", "SJF", "Multilevel Queue"], "correctAnswer": 2, "explanation": "Shortest Job First (SJF) can cause starvation for long processes if short processes keep arriving." },
          { "question": "What is a PCB?", "options": ["Process Control Block", "Process Central Board", "Program Control Block", "Personal Computer Board"], "correctAnswer": 0, "explanation": "PCB stores all information about a process, including state and PC." },
          { "question": "The Banker's Algorithm is used for:", "options": ["Deadlock Prevention", "Deadlock Avoidance", "Deadlock Detection", "Memory Allocation"], "correctAnswer": 1, "explanation": "Banker's Algorithm is a classic deadlock avoidance algorithm." },
          { "question": "Which component of the OS is responsible for process scheduling?", "options": ["Kernel", "Shell", "Dispatcher", "Compiler"], "correctAnswer": 0, "explanation": "The scheduler (part of the kernel) decides which process runs." },
          { "question": "Virtual memory is typically implemented by:", "options": ["Segmentation", "Demand Paging", "Swapping", "Fragmentation"], "correctAnswer": 1, "explanation": "Demand paging is the most common way to implement virtual memory." },
          { "question": "A mutex is a:", "options": ["Type of thread", "Synchronization tool", "Scheduling algorithm", "Memory management unit"], "correctAnswer": 1, "explanation": "A Mutex (Mutual Exclusion) object is used to synchronize access to a resource." },
          { "question": "Which page replacement algorithm suffers from Belady's Anomaly?", "options": ["LRU", "FIFO", "Optimal", "LFU"], "correctAnswer": 1, "explanation": "First-In-First-Out (FIFO) can show increased page faults with more frames." },
          { "question": "The 'Ready' state of a process means:", "options": ["It is waiting for I/O", "It is being created", "It is in memory and waiting for CPU", "It has finished execution"], "correctAnswer": 2, "explanation": "Processes in the ready state are in main memory, waiting to be assigned to a CPU." },
          { "question": "What is context switching?", "options": ["Switching between users", "Saving and restoring process state", "Changing CPU speed", "Switching between RAM and Disk"], "correctAnswer": 1, "explanation": "Context switching is the process of storing the state of a process so it can be resumed later." },
          { "question": "In disk scheduling, SSTF stands for:", "options": ["Shortest Service Time First", "Shortest Seek Time First", "Sequential Service Time First", "Single Seek Time First"], "correctAnswer": 1, "explanation": "Shortest Seek Time First selects the request with the minimum seek time from the current head position." }
        ];
        return JSON.stringify(baseMcqs.slice(0, count));
      }
    }

    if (userMessage.includes('differential calculus') || userMessage.includes('calculus')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Differential Calculus
This unit focuses on advanced differentiation concepts, successive derivative extensions, limits, mean value theorems, power series representations, and multivariable functions.

**Detailed Topic Breakdown:**

1. **Successive Differentiation & Leibniz Theorem**:
   - Successive Differentiation: Finding the n-th derivative of a function.
   - Leibniz Theorem: Evaluates the n-th derivative of the product of two functions u and v: (uv)_n = Σ (n_C_r) * u_(n-r) * v_r.

2. **Mean Value Theorems**:
   - **Rolle\'s Theorem**: If f(x) is continuous in [a,b], differentiable in (a,b), and f(a) = f(b), then there exists a point c ∈ (a,b) where f\'(c) = 0.
   - **Lagrange\'s Mean Value Theorem (LMVT)**: Relaxes f(a) = f(b). There exists a point c ∈ (a,b) where f\'(c) = [f(b) - f(a)] / (b - a).
   - **Cauchy\'s Mean Value Theorem**: Generalizes LMVT to two functions f(x) and g(x). There exists c ∈ (a,b) where f\'(c)/g\'(c) = [f(b) - f(a)] / [g(b) - g(a)].

3. **Power Series Expansions**:
   - **Maclaurin\'s Series**: Expands f(x) around x = 0: f(x) = f(0) + x f\'(0) + (x^2/2!) f\'\'(0) + ...
   - **Taylor\'s Series**: Expands f(x) around x = a: f(x) = f(a) + (x-a) f\'(a) + [(x-a)^2/2!] f\'\'(a) + ...

4. **Multivariable Calculus (Partial Differentiation)**:
   - Partial derivatives: Differentiation with respect to one variable keeping others constant.
   - **Euler\'s Theorem for Homogeneous Functions**: If f(x,y) is homogeneous of degree n, then x(∂f/∂x) + y(∂f/∂y) = n f.

5. **Jacobian & Change of Variables**:
   - Jacobian determinant: Measures the local scale factor of a coordinate transformation.
   - J = ∂(u,v)/∂(x,y) = | ∂u/∂x  ∂u/∂y | / | ∂v/∂x  ∂v/∂y |.

**Important Formulas:**
- Leibniz Theorem: (uv)_n = u_n v + n u_(n-1) v_1 + [n(n-1)/2!] u_(n-2) v_2 + ...
- Euler\'s Theorem: x(∂f/∂x) + y(∂f/∂y) = n f.
- Euler\'s Second-Order: x^2(∂^2f/∂x^2) + 2xy(∂^2f/∂x∂y) + y^2(∂^2f/∂y^2) = n(n-1)f.

**Exam Strategy:**
Expect Leibniz theorem proofs and multi-variable Jacobians. Maclaurin expansions for standard functions (e^x, sin x, log(1+x)) are highly common.`;
      }
      return `### Revision Notes: Differential Calculus
Concise last-minute cheat sheet with standard formulas and memory aids.

- **Standard n-th Derivatives**:
  - **Power Function**: $d^n/dx^n (x^m) = \frac{m!}{(m-n)!} x^{m-n}$
  - **Exponential**: $d^n/dx^n (e^{ax}) = a^n e^{ax}$
  - **Logarithmic**: $d^n/dx^n [\log(ax+b)] = \frac{(-1)^{n-1}(n-1)! a^n}{(ax+b)^n}$
  - **Sine Wave**: $d^n/dx^n [\sin(ax+b)] = a^n \sin(ax + b + \frac{n\pi}{2})$
- **Leibniz Theorem (Product Rule)**:
  - **Formula**: $(u \cdot v)_n = u_n v + ^nC_1 u_{n-1} v_1 + ^nC_2 u_{n-2} v_2 + \dots + u v_n$
  - **Mnemonic: "B-D-I (Binomial Decrease Increase)"**: The coefficients follow Binomial combinations ($^nC_r$), derivatives of the first term $u$ **D**ecrease ($u_n \to u_{n-1}$), while derivatives of the second term $v$ **I**ncrease ($v \to v_1 \to v_2$).
- **Euler\'s Homogeneous Function Theorem**:
  - Homogeneous definition: $f(tx, ty) = t^n f(x,y)$ (degree $n$).
  - **First Order**: $x\frac{\partial u}{\partial x} + y\frac{\partial u}{\partial y} = n \cdot u$
  - **Second Order**: $x^2\frac{\partial^2u}{\partial x^2} + 2xy\frac{\partial^2u}{\partial x\partial y} + y^2\frac{\partial^2u}{\partial y^2} = n(n-1)u$
  - **Mnemonic: "E-O-M (Euler Order Multiplication)"**: The sum of coordinates times partial derivatives equals the function scaled by its **O**rder $n$ (or $n(n-1)$ for second order).
- **Jacobian Determinants (Transformation scale)**:
  - **Chain Rule**: $\frac{\partial(u,v)}{\partial(x,y)} = \frac{\partial(u,v)}{\partial(r,s)} \times \frac{\partial(r,s)}{\partial(x,y)}$ (Works like fraction multiplication!).
  - **Reciprocal Property**: $J \times J' = 1$, where $J = \frac{\partial(u,v)}{\partial(x,y)}$ and $J' = \frac{\partial(x,y)}{\partial(u,v)}$.
  - **Mnemonic: "J-R-O (Jacobian Reciprocal One)"**: The Jacobian of a transformation times its reverse is always **One** ($J \cdot J' = 1$).`;
    }

    if (userMessage.includes('multiple integrals')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Multiple Integrals
This unit extends integration to higher dimensions. It covers double and triple integrals, switching integration limits (change of order), transformation of coordinates (Jacobian), and applications to physical geometry (area, volume, mass centers).

**Detailed Topic Breakdown:**

1. **Double Integrals**:
   - Integration over 2D planar regions. Evaluated as iterated integrals.
   - Used to compute Area: A = ∫∫_R dx dy.

2. **Change of Order of Integration**:
   - Altering the integration sequence (e.g., from dx dy to dy dx) when limits are variable or hard to evaluate directly.
   - Requires sketching the bounding region R and identifying new horizontal/vertical strips.

3. **Triple Integrals**:
   - Integration over 3D spatial volumes: V = ∫∫∫_V dx dy dz.
   - Evaluated as three successive single integrals.

4. **Change of Variables (Coordinate Transformations)**:
   - Transforming variables (e.g., Cartesian to Polar/Cylindrical/Spherical) to simplify integration limits.
   - Uses the Jacobian determinant factor: dx dy = |J| du dv.
     - Polar: x = r cos θ, y = r sin θ => dx dy = r dr dθ.
     - Spherical: x = r sin θ cos φ, y = r sin θ sin φ, z = r cos θ => dx dy dz = r^2 sin θ dr dθ dφ.

5. **Dirichlet\'s Integrals & Liouville\'s Extension**:
   - Dirichlet\'s formula evaluates integrals of the type ∫∫...∫ x^(l-1) y^(m-1) z^(n-1)... dx dy dz... over the domain x+y+z... <= 1.
   - Evaluated directly using Gamma functions: Γ(l)Γ(m)Γ(n)/Γ(l+m+n+1).

**Important Formulas:**
- Double Integral Area: A = ∫∫ dx dy.
- Triple Integral Volume: V = ∫∫∫ dx dy dz.
- Polar Jacobian: J = r.
- Spherical Jacobian: J = r^2 sin θ.
- Dirichlet\'s Integral (3 variables): ∫∫∫ x^(p-1) y^(q-1) z^(r-1) dx dy dz = Γ(p)Γ(q)Γ(r) / Γ(p+q+r+1).

**Exam Tips:**
Changing the order of integration and calculating volumes using triple integrals are heavily weighted exam questions. Practice sketching circular and parabolic regions.`;
      }
      return `### Revision Notes: Multiple Integrals
Quick coordinate transformation cheat sheet and volume integration shortcuts.

- **Iterated Integral Rule**:
  - Integrate **inside-out**: innermost variables first, constants last.
- **Change of Order of Integration**:
  1. Plot the boundary curves from the original limits.
  2. Draw the strip (vertical for $dy\,dx$, horizontal for $dx\,dy$).
  3. Swap the strip orientation (e.g. from vertical to horizontal) to find new limits.
- **Coordinate System Transformations**:
  - **Polar Coordinates** ($2D$):
    - $x = r \cos \theta$, $y = r \sin \theta$
    - Area scaling factor: $dx\,dy = r\,dr\,d\theta$
    - **Mnemonic: "P-R (Polar Radius)"**: The Polar transformation introduces a lone **R** radius scaling factor.
  - **Spherical Coordinates** ($3D$):
    - $x = r \sin \theta \cos \phi$, $y = r \sin \theta \sin \phi$, $z = r \cos \theta$
    - Volume scaling factor: $dx\,dy\,dz = r^2 \sin \theta\,dr\,d\theta\,d\phi$
    - **Mnemonic: "S-R-S (Spherical Radius-Sine)"**: Spherical transformation scales by **R** squared **S**ine $\theta$ ($r^2 \sin\theta$).
- **Dirichlet\'s Theorem (Volume Integrals)**:
  - For $x \ge 0, y \ge 0, z \ge 0$ and $(x+y+z) \le 1$:
    - $\iiint x^{p-1} y^{q-1} z^{r-1} dx\,dy\,dz = \frac{\Gamma(p)\Gamma(q)\Gamma(r)}{\Gamma(p+q+r+1)}$
  - **Mnemonic: "D-P-S (Dirichlet: Product over Sum + 1)"**: The numerator is the **P**roduct of individual gammas, and the denominator is the **S**um of parameters plus **One** in Gamma.
- **Liouville\'s Extension (Variable limits)**:
  - For domain $h_1 \le (x+y+z) \le h_2$:
    - $\iiint x^{p-1} y^{q-1} z^{r-1} f(x+y+z) dx\,dy\,dz = \frac{\Gamma(p)\Gamma(q)\Gamma(r)}{\Gamma(p+q+r)} \int_{h_1}^{h_2} u^{p+q+r-1} f(u) du$`;
    }

    if (userMessage.includes('vector calculus')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Vector Calculus
Vector calculus is the study of differentiation and integration of vector fields. It is a vital tool for electromagnetic theory, fluid mechanics, and thermodynamics.

**Detailed Topic Breakdown:**

1. **Vector Differentiation Operations**:
   - **Gradient (∇f)**: Represents the rate and direction of maximum spatial change of a scalar field f. Normal to surface f(x,y,z) = c.
   - **Divergence (∇ · F)**: Measures the net outward flux of a vector field F per unit volume.
   - **Curl (∇ × F)**: Measures the rotation or angular velocity of a vector field F.

2. **Physical Interpretations**:
   - Solenoidal Field: If Divergence of F = 0 (no source or sink).
   - Irrotational Field (Conservative): If Curl of F = 0 (field can be written as gradient of scalar potential: F = ∇φ).

3. **Line, Surface, and Volume Integrals**:
   - Line Integral (∫ F · dr): Work done by force F along curve C.
   - Surface Integral (∫∫ F · dS): Net flux of vector field F through surface S.
   - Volume Integral (∫∫∫ div F dV): Mass or field accumulation over a 3D region.

4. **Fundamental Theorems**:
   - **Green\'s Theorem**: Relates line integral in 2D to double integral over planar area: ∫ (P dx + Q dy) = ∫∫ (∂Q/∂x - ∂P/∂y) dx dy.
   - **Gauss Divergence Theorem**: Relates surface flux to volume divergence: ∫∫ F · dS = ∫∫∫ (∇ · F) dV.
   - **Stokes\' Theorem**: Relates line integral of loop to surface flux of curl: ∫ F · dr = ∫∫ (∇ × F) · dS.

**Important Formulas:**
- ∇ = i(∂/∂x) + j(∂/∂y) + k(∂/∂z)
- Green\'s: ∫ (P dx + Q dy) = ∫∫ (∂Q/∂x - ∂P/∂y) dx dy.
- Gauss: ∫∫ F · n dS = ∫∫∫ (∇ · F) dV.
- Stokes: ∫ F · dr = ∫∫ (∇ × F) · dS.

**Exam Tips:**
Verify Gauss or Stokes\' Theorem for a given cuboid or hemispherical surface. These theorems are always tested with 10-mark questions.`;
      }
      return `### Revision Notes: Vector Calculus
Essential vector differentiation operations, identities, and core theorems.

- **Vector Operator Del ($\nabla$)**:
  - $\nabla = \mathbf{i}\frac{\partial}{\partial x} + \mathbf{j}\frac{\partial}{\partial y} + \mathbf{k}\frac{\partial}{\partial z}$
- **Core Operations**:
  - **Gradient (of Scalar $\phi$)**: $\nabla\phi = \mathbf{i}\frac{\partial\phi}{\partial x} + \mathbf{j}\frac{\partial\phi}{\partial y} + \mathbf{k}\frac{\partial\phi}{\partial z}$ (Vector normal to surface).
  - **Divergence (of Vector $\mathbf{F}$)**: $\nabla\cdot\mathbf{F} = \frac{\partial F_x}{\partial x} + \frac{\partial F_y}{\partial y} + \frac{\partial F_z}{\partial z}$ (Scalar representing flux).
  - **Curl (of Vector $\mathbf{F}$)**: $\nabla\times\mathbf{F} = \det\begin{bmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ \frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z} \\ F_x & F_y & F_z \end{bmatrix}$ (Vector representing rotation).
  - **Mnemonic: "G-V-D-S-C-V (Grad Vector, Div Scalar, Curl Vector)"**: **G**radient outputs a **V**ector, **D**ivergence outputs a **S**calar, and **C**url outputs a **V**ector.
- **Key Vector Identities**:
  - **Curl of Gradient**: $\nabla\times(\nabla\phi) = \mathbf{0}$
  - **Divergence of Curl**: $\nabla\cdot(\nabla\times\mathbf{F}) = 0$
  - **Mnemonic: "C-G-Zero & D-C-Zero"**: **C**url of **G**rad is **Zero**, and **D**ivergence of **C**url is **Zero**.
- **Vector Field Classifications**:
  - **Solenoidal**: Field has no source/sink $\iff \nabla\cdot\mathbf{F} = 0$ (like incompressible fluid).
  - **Irrotational**: Field is conservative $\iff \nabla\times\mathbf{F} = \mathbf{0}$ (can be written as $\mathbf{F} = \nabla\phi$).
- **Vector Integral Theorems**:
  - **Green\'s Theorem**: $\oint (P\,dx + Q\,dy) = \iint (\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}) dx\,dy$
  - **Gauss Divergence**: $\iint \mathbf{F}\cdot\mathbf{n}\,dS = \iiint (\nabla\cdot\mathbf{F}) dV$ (Relates **S**urface flux to **V**olume divergence).
  - **Stokes\' Theorem**: $\oint \mathbf{F}\cdot d\mathbf{r} = \iint (\nabla\times\mathbf{F})\cdot\mathbf{n}\,dS$ (Relates **L**ine loop to **S**urface curl).
  - **Mnemonic: "G-L-S & G-S-V (Green-Line-Surface, Gauss-Surface-Volume)"**: **Green\'s** / **Stokes\'** convert **L**ine integrals to **S**urface, **Gauss** converts **S**urface to **V**olume.`;
    }

    if (userMessage.includes('beta & gamma') || userMessage.includes('gamma function') || userMessage.includes('beta function')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Beta & Gamma Functions
This unit covers improper integrals and introduces the special Beta and Gamma transcendental functions. These functions simplify complicated calculus integrals and are widely applied in quantum mechanics, engineering statistics, and fractional derivatives.

**Detailed Topic Breakdown:**

1. **Improper Integrals**:
   - Integrals where either limits are infinite or the integrand is discontinuous at some point in the interval.
   - Evaluated using limits to test convergence or divergence.

2. **Gamma Function (Eulerian Integral of the Second Kind)**:
   - Defined as: Γ(n) = ∫_0^∞ e^-x * x^(n-1) dx (for n > 0).
   - Acts as an extension of factorials to real and complex numbers.
   - Key recurrence: Γ(n+1) = n Γ(n). For integers, Γ(n+1) = n!.
   - Special value: Γ(1/2) = √π.

3. **Beta Function (Eulerian Integral of the First Kind)**:
   - Defined as: B(m,n) = ∫_0^1 x^(m-1) * (1-x)^(n-1) dx (for m > 0, n > 0).
   - Trigonometric Form: B(m,n) = 2 ∫_0^(π/2) (sin θ)^(2m-1) * (cos θ)^(2n-1) dθ.

4. **Relationship Between Beta and Gamma**:
   - B(m,n) = Γ(m) * Γ(n) / Γ(m+n).
   - Extremely useful for evaluating trigonometric integrals: ∫_0^(π/2) (sin θ)^p (cos θ)^q dθ = [Γ((p+1)/2) * Γ((q+1)/2)] / [2 * Γ((p+q+2)/2)].

5. **Duplication Formula**:
   - Relates Gamma functions of argument m and (m + 1/2):
     - Γ(m) * Γ(m + 1/2) = [√π / 2^(2m-1)] * Γ(2m).

**Important Formulas:**
- Gamma definition: Γ(n) = ∫_0^∞ e^-t t^(n-1) dt.
- Beta definition: B(m,n) = ∫_0^1 x^(m-1) (1-x)^(n-1) dx.
- Relation: B(m,n) = Γ(m)Γ(n)/Γ(m+n).
- Duplication: Γ(m)Γ(m+1/2) = [√π / 2^(2m-1)] * Γ(2m).
- Special Value: Γ(1/2) = √π.

**Exam Strategy:**
Master evaluations of trigonometric definite integrals from 0 to π/2 using the Beta-Gamma relation. Proving the duplication formula is a very common theoretical question.`;
      }
      return `### Revision Notes: Beta & Gamma Functions
Concise summary of improper integrals, Euler integrals, and trigonometric evaluations.

- **Gamma Function ($\Gamma(n)$)**:
  - Definition: $\Gamma(n) = \int_0^\infty e^{-t} t^{n-1} dt$ (Eulerian Integral of the 2nd kind).
  - Recurrence: $\Gamma(n+1) = n\Gamma(n)$ (for real $n$), and $\Gamma(n+1) = n!$ (for integer $n$).
  - Half-Gamma special value: $\Gamma(1/2) = \sqrt{\pi}$.
  - **Mnemonic: "G-H-P (Gamma-Half-Pi)"**: The Gamma of **H**alf is the square root of **P**i ($\Gamma(1/2) = \sqrt{\pi}$).
- **Beta Function ($B(m,n)$)**:
  - Definition: $B(m,n) = \int_0^1 x^{m-1} (1-x)^{n-1} dx$ (Eulerian Integral of the 1st kind).
  - Alternate form: $B(m,n) = \int_0^\infty \frac{x^{m-1}}{(1+x)^{m+n}} dx$.
- **Beta-Gamma Relationship**:
  - Formula: $B(m,n) = \frac{\Gamma(m)\Gamma(n)}{\Gamma(m+n)}$
  - **Mnemonic: "B-P-S (Beta Product-Sum)"**: Beta is the **P**roduct of gammas divided by their **S**um.
- **Trigonometric Definite Integral Evaluation**:
  - $\int_0^{\pi/2} \sin^p\theta \cos^q\theta \,d\theta = \frac{\Gamma(\frac{p+1}{2}) \Gamma(\frac{q+1}{2})}{2 \Gamma(\frac{p+q+2}{2})}$
  - **Mnemonic: "Half-Angle-Plus-One"**: For $\sin^p\theta \cos^q\theta$, transform indices to Gamma arguments by **adding one** and dividing by **two** ($\frac{p+1}{2}$).
- **Duplication Formula**:
  - $\Gamma(m)\Gamma(m + 1/2) = \frac{\sqrt{\pi}}{2^{2m-1}} \Gamma(2m)$
- **Gamma Recurrence Fractions**:
  - $\Gamma(5/2) = \frac{3}{2}\frac{1}{2}\Gamma(1/2) = \frac{3\sqrt{\pi}}{4}$
  - $\Gamma(7/2) = \frac{5}{2}\frac{3}{2}\frac{1}{2}\Gamma(1/2) = \frac{15\sqrt{\pi}}{8}$`;
    }

    if (userMessage.includes('electromagnetic field') || userMessage.includes('wave propagation')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Electromagnetic Field Theory
EMT deals with static and dynamic electric and magnetic fields, culminating in Maxwell\'s Equations and electromagnetic wave propagation.

**Key Concepts:**
1. **Maxwell\'s Equations**: Four fundamental equations unifying electricity and magnetism.
2. **Displacement Current**: James Clerk Maxwell\'s term explaining magnetic fields produced by changing electric fields.
3. **Poynting Vector**: Represents the directional energy flux density (power flow) of an EM wave: S = E × H.

**Exam Tips:**
Expect derivations of electromagnetic wave equations in free space and proving that EM waves are transverse.`;
      }
      return `### Revision Notes: Electromagnetic Field Theory
- **Maxwell\'s 4 Equations**:
  1. ∇·D = ρ (Gauss\'s Law for Electrostatics)
  2. ∇·B = 0 (Gauss\'s Law for Magnetism)
  3. ∇×E = -dB/dt (Faraday\'s Law of Induction)
  4. ∇×H = J + dD/dt (Ampere\'s Circuital Law with displacement current)
- **Poynting Theorem**: Statement of conservation of energy for EM fields.`;
    }

    if (userMessage.includes('quantum mechanics')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Quantum Mechanics
Quantum mechanics describes the physical properties of nature at the scale of atoms and subatomic particles.

**Key Concepts:**
1. **Wave-Particle Duality**: Matter exhibits both particle-like and wave-like behavior (de Broglie hypothesis).
2. **Schrodinger Equation**: Fundamental equation of quantum mechanics describing how the quantum state of a system changes with time.
3. **Uncertainty Principle**: Position and momentum cannot be measured simultaneously with absolute precision.

**Formula:**
- Schrodinger Equation: Hψ = Eψ`;
      }
      return `### Revision Notes: Quantum Mechanics
- **de Broglie Wavelength**: λ = h/p.
- **Wave Function (ψ)**: Complex probability amplitude. |ψ|^2 represents probability density.
- **Schrodinger Equation (Time-Independent)**: d^2ψ/dx^2 + (8π^2m/h^2)(E - V)ψ = 0.
- **Particle in a 1D Box**: Energy is quantized: E_n = n^2 * h^2 / (8mL^2).`;
    }

    if (userMessage.includes('lasers') || userMessage.includes('fiber optics')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Lasers & Fiber Optics
Lasers produce highly coherent, monochromatic light, while optical fibers guide this light over long distances with minimal loss.

**Key Concepts:**
1. **Population Inversion**: Condition where more atoms are in excited states than ground states (essential for laser action).
2. **Numerical Aperture (NA)**: Light-gathering ability of an optical fiber.
3. **Einstein Coefficients**: Describe rates of absorption, spontaneous emission, and stimulated emission.

**Formulas:**
- NA = √(μ_core^2 - μ_cladding^2)
- Acceptance Angle: θ_a = sin^-1(NA)`;
      }
      return `### Revision Notes: Lasers & Fiber Optics
- **Stimulated Emission**: Incoming photon triggers an excited atom to drop energy levels, emitting a coherent photon.
- **Pumping**: Mechanism (optical, electrical) to achieve population inversion.
- **Total Internal Reflection (TIR)**: Guides light in fiber core (core index > cladding index).
- **V-Number**: Normalized frequency determining the number of modes supported by the fiber.`;
    }

    if (userMessage.includes('decidability') || userMessage.includes('complexity')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Decidability & P/NP Complexity
Explores what problems can be solved by computers (decidability) and how efficiently they can be solved (complexity classes).

**Key Concepts:**
1. **Decidable Language**: A language for which there exists a Turing Machine that halts on all inputs (accept or reject).
2. **Halting Problem**: Proving that no program can decide if any arbitrary code halts or loops.
3. **Classes P and NP**: P contains problems solvable in polynomial time; NP contains problems checkable in polynomial time.
4. **NP-Complete**: The hardest problems in NP; if one is in P, then P = NP.

**Famous Theorems:**
- Cook-Levin Theorem: SAT is NP-Complete.`;
      }
      return `### Revision Notes: Decidability & P/NP Complexity
- **Recursive Language**: Decidable (Turing Machine always halts).
- **Recursively Enumerable**: Semi-decidable (TM halts on accept, may loop on reject).
- **Undecidable Problems**: Halting Problem, Post Correspondence Problem (PCP), State Entry Problem.
- **Reduction**: Converting problem A to B to show relative difficulty.
- **P vs NP**: Is checking a solution fundamentally easier than finding one? (Unresolved).`;
    }

    if (userMessage.includes('matrices') || userMessage.includes('math')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Engineering Mathematics (Matrices)
Matrices represent systems of linear equations and linear transformations. This unit covers foundational matrix operations, types, eigenvalues, eigenvectors, and complex algebraic theorems necessary for advanced engineering analysis.

**Detailed Topic Breakdown:**

1. **Special Types of Matrices**:
   - **Symmetric Matrix**: A square matrix A where A^T = A.
   - **Skew-Symmetric Matrix**: A square matrix A where A^T = -A. The diagonal elements are always zero.
   - **Orthogonal Matrix**: A square matrix A satisfying A * A^T = A^T * A = I. Determinant is always ±1.
   - **Hermitian & Skew-Hermitian Matrices**: Complex matrix definitions where conjugate transpose equals A or -A.
   - **Unitary Matrix**: Complex analogue of orthogonal matrix where A * A^H = I.

2. **Rank of a Matrix**:
   - Defined as the maximum number of linearly independent rows or columns.
   - Calculated using Elementary Row Transformations to convert the matrix into Echelon Form (upper triangular form).
   - Normal Form (Canonical Form) [I_r 0; 0 0] where the order of identity matrix yields the rank r.

3. **Systems of Linear Equations**:
   - Non-Homogeneous (AX = B): Consistent if Rank(A) = Rank(A|B) [Augmented Matrix]. Unique solution if Rank = n; infinite solutions if Rank < n.
   - Homogeneous (AX = 0): Trivial solution (X = 0) if Rank = n; non-trivial solutions if Rank < n (det(A) = 0).

4. **Cayley-Hamilton Theorem**:
   - Every square matrix satisfies its own characteristic equation: P(λ) = det(A - λI) = 0.
   - Replacing λ with matrix A yields P(A) = O (Null matrix).
   - Crucial for finding matrix inverses A^-1 and calculating higher powers A^k without repeated multiplication.

5. **Eigenvalues & Eigenvectors**:
   - Eigenvalues (λ) are roots of the characteristic equation det(A - λI) = 0.
   - Eigenvectors (X) satisfy AX = λX (non-zero vectors).
   - Real Symmetric matrices always have real eigenvalues.

6. **Diagonalization**:
   - Transforming a matrix A into a diagonal matrix D via a similarity transformation D = P^-1 * A * P.
   - P is the Modal Matrix whose columns are the linearly independent eigenvectors of A.
   - The diagonal elements of D are the eigenvalues of A.

**Important Formulas:**
- Characteristic Equation: det(A - λI) = 0.
- Inverse via Cayley-Hamilton: A^-1 = (1/c_n) * [A^(n-1) - c_1 A^(n-2) ... - c_(n-1) I].
- Sum of Eigenvalues = Trace of A.
- Product of Eigenvalues = Determinant of A.

**Exam Strategy:**
Master calculation steps for eigenvalues of 3x3 matrices. Diagonalization proofs and Cayley-Hamilton inverse verifications appear in every sessional and final paper.`;
      }
      if (systemPrompt.includes('notes')) {
        return `### Revision Notes: Matrices
Core matrix theorems, eigenvalue rules, and diagonalization checklist.

- **Matrix Property Categories**:
  - **Symmetric**: $A^T = A$ (or $a_{ij} = a_{ji}$)
  - **Skew-Symmetric**: $A^T = -A$ (diagonal elements $a_{ii} = 0$)
  - **Orthogonal**: $A^T = A^{-1}$ (or $A \cdot A^T = I$)
  - **Mnemonic: "S-S-O (Same, Sign, One)"**: **S**ymmetric transpose is the **Same** ($A^T=A$), **S**kew transpose switches **Sign** ($A^T=-A$), and **O**rthogonal product yields the identity **One** ($A A^T = I$).
- **Rank Properties**:
  - $\text{Rank}(A) = \text{Rank}(A^T)$
  - $\text{Rank}(A \cdot B) \le \min(\text{Rank}(A), \text{Rank}(B))$
  - If $\det(A) \ne 0 \implies \text{Rank}(A) = n$ (Full Rank).
- **Cayley-Hamilton Theorem**:
  - Every square matrix satisfies its own characteristic equation: $p(A) = 0$.
  - For characteristic equation $\lambda^3 - c_1 \lambda^2 + c_2 \lambda - c_3 = 0 \implies A^3 - c_1 A^2 + c_2 A - c_3 I = 0$.
  - **Inverse Matrix Formula**: $A^{-1} = \frac{1}{c_3}(A^2 - c_1 A + c_2 I)$ (obtained by pre-multiplying by $A^{-1}$).
- **Eigenvalue Rules**:
  - **Sum**: $\sum \lambda_i = \text{Trace}(A)$ (Sum of main diagonal).
  - **Product**: $\prod \lambda_i = \det(A)$.
  - **Mnemonic: "T-S-D-P (Trace-Sum, Det-Product)"**: **T**race equals the **S**um of eigenvalues; **D**eterminant equals the **P**roduct.
  - Eigenvalues of $A^T$ are same as $A$.
  - Eigenvalues of inverse $A^{-1}$ are $\frac{1}{\lambda_i}$.
  - Eigenvalues of powers $A^k$ are $\lambda_i^k$.
- **Diagonalization Checklist**:
  - Matrix $A$ is diagonalizable $\iff$ it has $n$ linearly independent eigenvectors.
  - If all eigenvalues $\lambda_i$ are distinct, $A$ is guaranteed to be diagonalizable.`;
      }
      if (systemPrompt.includes('qa pairs')) {
        return `Q1: State the Cayley-Hamilton Theorem.
Answer: The Cayley-Hamilton theorem states that every square matrix A satisfies its own characteristic equation, i.e., if p(λ) = det(A - λI) = 0, then p(A) = 0.

Q2: What is the rank of an identity matrix of size n?
Answer: The rank is n, as all n rows are linearly independent and the determinant of any submatrix of size n is non-zero (det(I) = 1).

Q3: When is a matrix diagonalizable?
Answer: A matrix of size n is diagonalizable if and only if it has n linearly independent eigenvectors.`;
      }
      if (systemPrompt.includes('multiple-choice questions')) {
        const isSubject = systemPrompt.includes('comprehensive');
        const count = isSubject ? 10 : 5;
        const baseMcqs = [
          { "question": "What is the rank of a 3x3 null matrix?", "options": ["0", "1", "2", "3"], "correctAnswer": 0, "explanation": "A null matrix has no linearly independent rows, so its rank is 0." },
          { "question": "The eigenvalues of a real symmetric matrix are always:", "options": ["Complex", "Real", "Zero", "Imaginary"], "correctAnswer": 1, "explanation": "Real symmetric matrices always have real eigenvalues." },
          { "question": "If det(A) = 0, then the rank of an n x n matrix A is:", "options": ["Equal to n", "Less than n", "Greater than n", "Always 0"], "correctAnswer": 1, "explanation": "A determinant of 0 means the rows are linearly dependent, so rank is strictly less than n." },
          { "question": "The trace of a square matrix is the:", "options": ["Product of eigenvalues", "Sum of eigenvalues", "Determinant", "Rank"], "correctAnswer": 1, "explanation": "The sum of the diagonal elements (trace) of a matrix is equal to the sum of its eigenvalues." },
          { "question": "Which theorem states that a matrix satisfies its own characteristic equation?", "options": ["Rolle's Theorem", "Lagrange's Theorem", "Cayley-Hamilton Theorem", "Taylor's Theorem"], "correctAnswer": 2, "explanation": "The Cayley-Hamilton theorem states that substituting the matrix into its characteristic equation yields the zero matrix." },
          { "question": "For any orthogonal matrix A, det(A) is:", "options": ["0", "1 or -1", "Always 2", "Infinity"], "correctAnswer": 1, "explanation": "Since A * A^T = I, det(A)^2 = 1, giving det(A) = ±1." },
          { "question": "If λ is an eigenvalue of A, then the eigenvalue of A^2 is:", "options": ["λ", "λ^2", "2λ", "1/λ"], "correctAnswer": 1, "explanation": "Applying A * x = λ * x twice gives A^2 * x = λ^2 * x." },
          { "question": "The determinant of a diagonal matrix is the:", "options": ["Sum of diagonal elements", "Product of diagonal elements", "Trace", "Rank"], "correctAnswer": 1, "explanation": "The determinant of a diagonal matrix is simply the product of its diagonal values." },
          { "question": "A square matrix is invertible if and only if its determinant is:", "options": ["0", "Non-zero", "1", "Positive"], "correctAnswer": 1, "explanation": "An invertible matrix must have a non-zero determinant to avoid division by zero in the inverse formula." },
          { "question": "Which of the following matrices is always symmetric?", "options": ["A * A^T", "A - A^T", "A + B", "A * B"], "correctAnswer": 0, "explanation": "Taking the transpose of (A * A^T) yields (A^T)^T * A^T = A * A^T, which matches the original matrix." }
        ];
        return JSON.stringify(baseMcqs.slice(0, count));
      }
    }

    if (userMessage.includes('optics') || userMessage.includes('physics')) {
      if (systemPrompt.includes('summary')) {
        return `### Comprehensive AI Overview: Engineering Physics (Wave Optics)
Wave Optics details the wave nature of light, explaining phenomena like interference, diffraction, and polarization.

**Key Units & Concepts:**
1. **Interference**: Superposition of coherent light waves creating bright and dark fringes. Examined via Young's double slit and thin films.
2. **Diffraction**: Bending of light waves around obstacles or slits (divided into Fresnel and Fraunhofer diffraction).
3. **Polarization**: Restricting transverse wave vibrations to a single plane (unpolarized light to polarized).
4. **Newton's Rings**: Circular interference pattern formed due to a thin air film of varying thickness between a lens and glass plate.

**Important Formulas:**
- Brewster's Law: tan(i_p) = μ (where i_p is the polarizing angle, μ is refractive index).
- Grating Equation: (e + d) sin(θ) = nλ.
- Fringes Width: β = λD/d.

**Exam Strategy:**
Master derivations for thin-film constructive/destructive interference. Resolving power of grating numericals are high-scoring and standard.`;
      }
      if (systemPrompt.includes('notes')) {
        return `### Revision Notes: Wave Optics
- **Coherent Sources**: Emit waves with a constant phase relationship and identical frequency. Essential for steady interference.
- **Brewster's Law**: When light is incident at polarizing angle, reflected light is completely polarized and perpendicular to refracted light.
- **Fraunhofer Diffraction**: Slit and screen are at infinite distances from source (parallel rays).
- **Double Refraction**: Unpolarized ray splits into Ordinary (O-ray) and Extraordinary (E-ray) rays upon entering anisotropic crystals like calcite.`;
      }
      if (systemPrompt.includes('qa pairs')) {
        return `Q1: Why is the center of Newton's rings dark in reflected light?
Answer: The wave reflected from the lower glass plate undergoes a phase change of π (corresponding to path difference of λ/2) upon reflection at the denser medium. This creates destructive interference at the contact point.

Q2: Distinguish between Interference and Diffraction.
Answer: Interference is the superposition of light waves originating from two separate coherent sources. Diffraction is the superposition of wavelets originating from different parts of the same wavefront.

Q3: What is a quarter-wave plate?
Answer: A quarter-wave plate is a double-refracting crystal plate that introduces a phase difference of π/2 (path difference of λ/4) between ordinary and extraordinary rays.`;
      }
      if (systemPrompt.includes('multiple-choice questions')) {
        const isSubject = systemPrompt.includes('comprehensive');
        const count = isSubject ? 10 : 5;
        const baseMcqs = [
          { "question": "In Newton's rings, the central spot is always:", "options": ["Bright", "Dark", "Colored", "Blue"], "correctAnswer": 1, "explanation": "Reflected light at the contact point undergoes a phase change of π, leading to destructive interference (dark center)." },
          { "question": "Which phenomenon demonstrates the transverse wave nature of light?", "options": ["Interference", "Diffraction", "Polarization", "Refraction"], "correctAnswer": 2, "explanation": "Only transverse waves can be polarized; longitudinal waves (like sound) cannot." },
          { "question": "Brewster's Law is mathematically expressed as:", "options": ["μ = sin(i_p)", "μ = cos(i_p)", "μ = tan(i_p)", "μ = cot(i_p)"], "correctAnswer": 2, "explanation": "Brewster's Law states that the refractive index is the tangent of the polarizing angle (μ = tan(i_p))." },
          { "question": "To observe interference, the two light sources must be:", "options": ["Intense", "Coherent", "Monochromatic only", "Close to each other"], "correctAnswer": 1, "explanation": "Coherent sources maintain a constant phase relationship, which is required to obtain a stationary interference pattern." },
          { "question": "Double refraction is observed in which type of crystals?", "options": ["Isotropic", "Anisotropic", "Amorphous", "Liquids"], "correctAnswer": 1, "explanation": "Anisotropic crystals (like calcite or quartz) exhibit double refraction due to differing light speeds in different directions." },
          { "question": "In Fraunhofer diffraction, the wavefront incident on the slit is:", "options": ["Spherical", "Cylindrical", "Plane", "Elliptical"], "correctAnswer": 2, "explanation": "Since sources are at infinity, the incident light rays are parallel, forming a plane wavefront." },
          { "question": "Which plate introduces a path difference of λ/2 between O-ray and E-ray?", "options": ["Quarter-wave plate", "Half-wave plate", "Full-wave plate", "Polarizer"], "correctAnswer": 1, "explanation": "A half-wave plate introduces a phase difference of π, which corresponds to a path difference of λ/2." },
          { "question": "Bending of light waves around the edges of an obstacle is called:", "options": ["Interference", "Diffraction", "Dispersion", "Scattering"], "correctAnswer": 1, "explanation": "Diffraction is the term used to describe the bending of waves around obstacles or slits." },
          { "question": "If film thickness increases, thin film interference colors:", "options": ["Get brighter", "Change or disappear", "Stay identical", "Turn black"], "correctAnswer": 1, "explanation": "As thickness increases, interference fringes overlap and eventually wash out, returning to white light." },
          { "question": "Light waves are:", "options": ["Electromagnetic and Longitudinal", "Electromagnetic and Transverse", "Mechanical and Transverse", "Mechanical and Longitudinal"], "correctAnswer": 1, "explanation": "Light waves are transverse electromagnetic waves that do not require a medium to travel." }
        ];
        return JSON.stringify(baseMcqs.slice(0, count));
      }
    }

    if (!this.apiKey) {
      throw new Error('API key not configured');
    }

    const fullMessages = systemPrompt
      ? [{ role: 'system', content: systemPrompt }, ...messages]
      : messages;

    // Valid free models on OpenRouter as of April 2026
    const modelsToTry = [
      this.model,                                  // google/gemma-4-31b-it:free
      'openai/gpt-oss-120b:free',
      'nvidia/nemotron-3-super-120b-a12b:free',
      'minimax/minimax-m2.5:free',
      'nvidia/nemotron-nano-9b-v2:free',
      'nvidia/nemotron-3-nano-30b-a3b:free'
    ];

    let lastError;

    for (const modelId of modelsToTry) {
      try {
        console.log(`Attempting AI call with model: ${modelId}`);
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.apiKey}`,
            'Content-Type': 'application/json',
            'HTTP-Referer': 'https://studynest.edu', 
            'X-Title': 'StudyNest'
          },
          body: JSON.stringify({
            model: modelId,
            messages: fullMessages,
            temperature: 0.7
          })
        });

        if (!response.ok) {
          const error = await response.json();
          const errorMsg = error.error?.message || 'API request failed';
          const lowerError = errorMsg.toLowerCase();
          
          // Detect temporary or model-specific errors to trigger fallback
          const isFallbackTrigger = 
            response.status >= 500 || 
            response.status === 400 || 
            response.status === 404 ||
            lowerError.includes('provider') || 
            lowerError.includes('capacity') || 
            lowerError.includes('timeout') ||
            lowerError.includes('model') || 
            lowerError.includes('endpoint') || 
            lowerError.includes('overloaded');

          if (isFallbackTrigger) {
            console.warn(`Model ${modelId} failed: ${errorMsg}. Trying fallback...`);
            throw new Error(errorMsg);
          }
          
          // Only stop for definitive critical errors (like invalid auth)
          throw new Error(`CRITICAL: ${errorMsg}`);
        }

        const data = await response.json();
        return data.choices[0].message.content;

      } catch (e) {
        lastError = e;
        
        // If it was explicitly marked as critical, stop the loop
        if (e.message.startsWith('CRITICAL:')) {
          throw new Error(e.message.replace('CRITICAL: ', ''));
        }
        
        console.log(`Switching from ${modelId} due to error...`);
        continue;
      }
    }

    throw new Error(`AI generation failed after trying ${modelsToTry.length} models. Last error: ${lastError.message}`);
  }

  async generateNotes(content, unitTitle) {
    const systemPrompt = `You are an expert engineering professor. Generate highly detailed yet precise, exam-focused revision notes optimized for last-minute cramming.
Format: Use bullet points with clear, bold headings.
Requirements:
1. Include all key formulas, mathematical equations, and variable explanations clearly.
2. Incorporate creative mnemonics, acronyms, or memory tricks to help students memorize formulas and complex sequences/concepts instantly.
3. Keep explanations highly concise and conceptual for fast speed-reading.`;

    const userMessage = `Generate revision notes for: ${unitTitle}\n\nContent:\n${content}`;
    return await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
  }

  async generateQA(content, minQuestions = 5) {
    const systemPrompt = `You are an expert engineering professor. Generate exam-oriented Q&A pairs.
Format: Mix of conceptual and numerical questions with detailed answers. Include formulas where relevant.`;

    const userMessage = `Generate at least ${minQuestions} Q&A pairs:\n\n${content}`;
    return await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
  }

  async generateSummary(content) {
    const systemPrompt = `You are an expert engineering professor. Create a highly detailed, comprehensive summary of the provided content. 
Structure the summary into:
1. Overview: High-level explanation of the topic.
2. Key Concepts: Definitions of crucial terms.
3. Formulas & Equations: List all important mathematical relations with variable definitions.
4. Exam Tips: What students should focus on for finals.
Use Markdown formatting for clarity.`;

    const userMessage = `Summarize this engineering unit content thoroughly:\n\n${content}`;
    return await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
  }

  async generateQuiz(content, numQuestions = 5) {
    const systemPrompt = `You are an expert engineering professor. Generate a set of ${numQuestions} multiple-choice questions based on the provided content.
Return the result ONLY as a valid JSON array of objects. Each object must have:
- question: The question text.
- options: An array of 4 strings (options).
- correctAnswer: The index (0-3) of the correct option.
- explanation: A brief explanation of why that option is correct.

Example structure:
[
  {
    "question": "What is...?",
    "options": ["A", "B", "C", "D"],
    "correctAnswer": 0,
    "explanation": "Because..."
  }
]`;

    const userMessage = `Generate a ${numQuestions}-question MCQ quiz for this content:\n\n${content}`;
    const response = await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
    
    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (e) {
      console.error('Failed to parse AI quiz response:', response);
      throw new Error('Failed to generate a valid quiz. Please try again.');
    }
  }

  async generateSubjectQuiz(subjectTitle, units, numQuestions = 10) {
    const combinedContent = units.map(u => `${u.title}: ${u.aiSummary || ''}`).join('\n\n');
    const systemPrompt = `You are an expert engineering professor. Generate a comprehensive ${numQuestions}-question MCQ quiz covering all units of the subject "${subjectTitle}".
Return the result ONLY as a valid JSON array of objects with fields: question, options (array of 4), correctAnswer (index 0-3), and explanation.`;

    const userMessage = `Generate a ${numQuestions}-question quiz for ${subjectTitle} covering these units:\n\n${combinedContent}`;
    const response = await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);

    try {
      const jsonMatch = response.match(/\[[\s\S]*\]/);
      if (jsonMatch) {
        return JSON.parse(jsonMatch[0]);
      }
      return JSON.parse(response);
    } catch (e) {
      throw new Error('Failed to generate subject quiz.');
    }
  }

  async improveNotes(notes) {
    const systemPrompt = `Improve study notes by adding missing points, formulas, derivations, and exam tips.`;

    const userMessage = `Improve these notes:\n\n${notes}`;
    return await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
  }

  async explainAnswer(question, correctAnswer) {
    const systemPrompt = `You are an expert engineering professor. Explain why the given answer is correct.
    Keep the explanation clear, concise, and exam-focused. Include any relevant formulas or concepts.`;

    const userMessage = `Question: ${question}\n\nCorrect Answer: ${correctAnswer}`;
    return await this.callAI([{ role: 'user', content: userMessage }], systemPrompt);
  }
}

export const aiService = new AIService();
