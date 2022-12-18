CREATE TABLE tasks_list (
    "id" serial PRIMARY KEY,
    "tasks" varchar(200),
    "isDone" boolean default false
);