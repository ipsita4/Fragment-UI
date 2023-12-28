# Task-Fragmentation
AN assignment to test the fragmentation ability of Developers

My Pick - Fragmentation of Functinality / UI

## My Reasons for Fragmentating it like that

### 1. **Separation of Concerns:**
   - **Original Code Issue:** A single component handling logic, TSX, and side effects.
   - **Refactoring Reasoning:** Smaller components and hooks for clear separation of responsibilities.

### 2. **Reusability and Maintainability:**
   - **Original Code Issue:** Large, monolithic components are challenging to maintain and reuse.
   - **Refactoring Reasoning:** Encapsulating logic and creating smaller components promotes reusability and easier maintenance.

### 3. **Readability and Code Structure:**
   - **Original Code Issue:** Large code files can be overwhelming and impact readability.
   - **Refactoring Reasoning:** Smaller, focused components improve code readability and structure.

### 4. **Easier Testing:**
   - **Original Code Issue:** Testing large components can be cumbersome.
   - **Refactoring Reasoning:** Smaller components and hooks simplify unit testing.

### 5. **Collaborative Development:**
   - **Original Code Issue:** Large files lead to conflicts in collaborative development.
   - **Refactoring Reasoning:** Smaller components enable parallel development and smoother collaboration.

### 6. **Maintaining a Clean and Scalable Codebase:**
   - **Original Code Issue:** Large code files hinder scalability.
   - **Refactoring Reasoning:** Breaking code into manageable pieces supports a clean and scalable codebase.

### 7. **Enhanced Debugging:**
   - **Original Code Issue:** Debugging is challenging in a large, complex codebase.
   - **Refactoring Reasoning:** Smaller components facilitate focused debugging for quicker issue resolution.

## Structure

The refactored code is organized into selective components and hooks, enhancing modularity and clarity. The primary components include:

- **BurnButtonBar:** Handles burn amount input and execution.
- **BurnStatsContainer:** Displays App token supply statistics.
- **BurnTxTable:** Renders the burn transactions table.
- **useBurnPage Hook:** Manages state and logic specific to the Burn Page component.
