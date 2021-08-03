"""empty message

Revision ID: 72e931d0b815
Revises: 7ac3019af1d8
Create Date: 2021-08-03 12:09:00.896009

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '72e931d0b815'
down_revision = '7ac3019af1d8'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.add_column('detail', sa.Column('tagline', sa.String(length=10), nullable=True))
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_column('detail', 'tagline')
    # ### end Alembic commands ###
