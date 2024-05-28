-- CreateTable
CREATE TABLE "specials" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" VARCHAR,
    "comedian" VARCHAR,

    CONSTRAINT "specials_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "specials_id_key" ON "specials"("id");

