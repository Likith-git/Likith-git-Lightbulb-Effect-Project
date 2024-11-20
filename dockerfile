# Step 1: Use the official Nginx image from Docker Hub
FROM nginx:alpine

# Step 2: Copy your website files (HTML, CSS, JS) to the Nginx HTML directory
COPY . /usr/share/nginx/html

# Step 3: Expose port 80 to allow access to the site
EXPOSE 80

# Step 4: The default command to run Nginx (already configured in the base image)
CMD ["nginx", "-g", "daemon off;"]
