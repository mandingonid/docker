FROM node:12
WORKDIR /app
COPY package*.json /app/package.json
RUN npm install
copy . /app
ENV PORT=8000
EXPOSE 8000
CMD ["npm", "start"]