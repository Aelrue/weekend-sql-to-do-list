CREATE TABLE "tasks_list" (
    "id" serial PRIMARY KEY,
    "tasks" varchar(200),
    "isDone" boolean default false
);

SELECT * FROM "tasks_list";

INSERT INTO "tasks_list"("tasks")
VALUES ('Walk dog');