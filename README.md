# Maths for AI

An interactive learning workspace for exploring the mathematical ideas behind machine learning. The app currently focuses on scalar equations, vectors, linear transformations, and metrics through hands-on controls, calculations, and visualizations.

## Interactive Lessons

### Scalar Playground

Explore the linear equation:

$$
y = wx + b
$$

Adjust the input `x`, weight `w`, and bias `b`. The playground calculates `y`, verifies the result independently with `mathjs`, and plots the resulting line with interactive points.

![Scalar Playground](screenshot/Scalar%20Playground.png)

### Vector Playground

Represent real-world houses as feature vectors. Select a house, choose the features shown on the X, Y, and Z axes, inspect the vector calculations, and find the most similar house. The playground includes both an interactive 3D feature space and a 5D parallel-coordinates view.

![Vector Playground](screenshot/Vector%20Playground.png)

### Linear Transformation Lab

Apply identity, scaling, rotation, reflection, shearing, and projection transformations to a 2D vector and square. The lab displays the transformation matrix, the input and output vectors, and the original and transformed shapes.

![Linear Transformation Lab](screenshot/Linear%20Transformation%20Lab.png)

### Metric Transformation Lab

Change the X and Y feature weights used to measure the distance between two points. Compare the weighted metric distance with Euclidean distance, inspect the metric matrix and per-axis contributions, and see the equal-distance ellipse update on the graph.

![Metric Transformation Lab](screenshot/Metric%20Transformation%20Lab.png)

## Routes

| Route | Content |
| --- | --- |
| `/` | All interactive lessons in sequence |
| `/linear-algebra/scalar` | Scalar Playground |
| `/linear-algebra/vectors` | Vector Playground |
| `/linear-algebra/transformations` | Linear Transformation Lab |
| `/linear-algebra/metric` | Metric Transformation Lab |
| `/linear-algebra` | Linear algebra lesson entry point |

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

## Project Structure

- `app/components/maths/` contains the interactive lesson components, controls, calculations, matrices, and graphs.
- `app/lib/math/` contains the reusable scalar, vector, transformation, and metric calculations.
- `app/linear-algebra/` contains the route pages for each lesson.
- `screenshot/` contains the README images for the interactive lessons.

## Tech Stack

- [Next.js](https://nextjs.org) with the App Router
- [React](https://react.dev)
- [D3](https://d3js.org) for graphing
- [Plotly.js](https://plotly.com/javascript/) for interactive vector visualizations
- [mathjs](https://mathjs.org) for independent calculation verification
- [Tailwind CSS](https://tailwindcss.com) for styling
- [TensorFlow.js](https://www.tensorflow.org/js) for browser-based numerical tooling
